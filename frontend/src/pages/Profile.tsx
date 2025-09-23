
import React, { useState } from 'react';
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  CreditCard, 
  Bell, 
  Shield, 
  HelpCircle, 
  LogOut,
  ChevronDown,
  Settings,
  Gift,
  Star
} from 'lucide-react';
function Profile(){
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: User,
      label: 'My Profile',
      description: 'View and edit personal information',
      href: '/profile'
    },
    {
      icon: Package,
      label: 'My Orders',
      description: 'Track orders and view history',
      href: '/orders',
      badge: '3'
    },
    {
      icon: Heart,
      label: 'Wishlist',
      description: 'Saved items and favorites',
      href: '/wishlist',
      badge: '12'
    },
    {
      icon: MapPin,
      label: 'Addresses',
      description: 'Manage shipping addresses',
      href: '/addresses'
    },
    {
      icon: CreditCard,
      label: 'Payment Methods',
      description: 'Manage cards and payment options',
      href: '/payment-methods'
    },
    {
      icon: Gift,
      label: 'Gift Cards & Coupons',
      description: 'Redeem codes and view balances',
      href: '/gift-cards'
    },
    {
      icon: Star,
      label: 'Reviews & Ratings',
      description: 'Your product reviews',
      href: '/reviews'
    },
    {
      icon: Bell,
      label: 'Notifications',
      description: 'Manage alert preferences',
      href: '/notifications'
    },
    {
      icon: Settings,
      label: 'Account Settings',
      description: 'Privacy and account preferences',
      href: '/settings'
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      description: 'FAQs and customer service',
      href: '/support'
    }
  ];

  return (
    <div className="relative">
      {/* Profile Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
          JD
        </div>
        <div className="hidden md:block text-left">
          <div className="text-sm font-medium text-gray-900">John Doe</div>
          <div className="text-xs text-gray-500">Premium Member</div>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                JD
              </div>
              <div>
                <div className="font-semibold">John Doe</div>
                <div className="text-sm opacity-90">john.doe@email.com</div>
                <div className="text-xs opacity-75 flex items-center mt-1">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Premium Member
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2 max-h-96 overflow-y-auto">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors duration-150 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-150">
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                  {item.badge && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-2">
            <button className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150 group">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors duration-150">
                <LogOut className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-sm">Sign Out</div>
                <div className="text-xs text-red-400">Securely log out of your account</div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
export default Profile;