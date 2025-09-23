import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "@/context/ShopContext";
import SearchBar from "./SearchBar";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Bell, CreditCard, Gift, Heart, HelpCircle, LogIn, LogOut, MapPin, Package, Settings, Star, User } from "lucide-react";

function Navbar(){
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState<boolean>(false);
  const shop = useContext(ShopContext);
  if (!shop) return null;
  const { setShowSearch, getTotalCartItems } = shop;

  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleProfileDropdown = (): void => {
    setProfileDropdownOpen(prev => !prev);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(prev => !prev);
    if (profileDropdownOpen) setProfileDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClickAndScroll = (event: MouseEvent | Event): void => {
      if (event.type === 'mousedown' && profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
      else if (profileDropdownOpen && (event.type === 'scroll' || event.type === 'touchmove')) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClickAndScroll);
    window.addEventListener('scroll', handleOutsideClickAndScroll);
    document.addEventListener('touchmove', handleOutsideClickAndScroll); // For mobile scrolling detection

    return () => {
      document.removeEventListener('mousedown', handleOutsideClickAndScroll);
      window.removeEventListener('scroll', handleOutsideClickAndScroll);
      document.removeEventListener('touchmove', handleOutsideClickAndScroll);
    };
  }, [profileDropdownOpen]);

  useEffect(() => {
    const handleOutsideClickAndScroll = (event: MouseEvent | Event): void => {
      if (event.type === 'mousedown' && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
      else if (mobileMenuOpen && (event.type === 'scroll' || event.type === 'touchmove')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClickAndScroll);
    window.addEventListener('scroll', handleOutsideClickAndScroll);
    document.addEventListener('touchmove', handleOutsideClickAndScroll);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClickAndScroll);
      window.removeEventListener('scroll', handleOutsideClickAndScroll);
      document.removeEventListener('touchmove', handleOutsideClickAndScroll);
    };
  }, [mobileMenuOpen]);

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
      badge: getTotalCartItems()
    },
    {
      icon: Heart,
      label: 'Wishlist',
      description: 'Saved items and favorites',
      href: '/wishlist',
      badge: '0'
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
    <div className="flex items-center justify-between font-medium bg-[#fa7ad4]">
      <Link to='/'>
        <img
          src={assets.logo}
          className="w-43 m-2 ml-4"
          alt="Logo"
        />
      </Link>
      <div className="flex items-center gap-10">
        <ul className=" hidden sm:flex gap-5 text-sm text-white">
          <NavLink to='/' className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
          </NavLink>
          <NavLink to='/about' className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
          </NavLink>
          <NavLink to='/collection' className="flex flex-col items-center gap-1">
            <p>Collection</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
          </NavLink>
          <NavLink to='/contact' className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
          </NavLink>
          <NavLink to='/login' className="flex flex-col items-center gap-1">
            <p>Login</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
          </NavLink>
        </ul>

        <div className="flex items-center gap-5 mr-5">
          <SearchBar />
          <img src={assets.search_icon} onClick={() => setShowSearch(true)} className="w-5 cursor-pointer sm:hidden" alt="" />
          <Link to='/cart' className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getTotalCartItems()}</p>
          </Link>
          {/* Profile Dropdown */}
          <div className="group relative" ref={profileDropdownRef}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div
              className={`absolute dropdown-menu right-0 pt-4 z-10 ${profileDropdownOpen ? 'block' : 'hidden'} sm:group-hover:block sm:${profileDropdownOpen ? '' : 'hidden'}`}
              onClick={() => setProfileDropdownOpen(false)}
            >
              <div className="bg-white rounded-lg shadow-2xl border border-gray-200 mt-2 w-80 z-50 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-400 to-purple-600 p-4 text-white">
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
                
                <div className="border-t border-gray-200 p-2">
                  <NavLink to='/login' className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150 group">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors duration-150">
                      <LogIn className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-sm">Login</div>
                      <div className="text-xs text-red-400">Securely log in to your account</div>
                    </div>
                  </NavLink>
                </div>

              </div>
              {/* <div className="flex flex-col w-36 border border-bg-black-1 bg-white text-black rounded">
                <p className="cursor-pointer px-3 py-1 border-b hover:bg-[#ebe9e2]">My Profile</p>
                <p className="cursor-pointer px-3 py-1 border-b hover:bg-[#ebe9e2]">Orders</p>
                <Link to={'/signup'}><p className="cursor-pointer px-3 py-1 pb-2 hover:bg-[#ebe9e2]">SignUp</p></Link>
              </div> */}
            </div>
          </div>
          {/* Mobile Menu Icon */}
          <HiBars3BottomRight onClick={toggleMobileMenu} className="w-5 cursor-pointer sm:hidden" />
          {/* <img
            onClick={toggleMobileMenu}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden "
            alt="Menu Icon"
          /> */}
        </div>

        {/* Mobile Sidebar */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-20 ${mobileMenuOpen ? 'w-50' : 'w-0'}`} ref={mobileMenuRef}> {/* <-- Ref attached here */}
          <div className="flex flex-col text-black">
            <div onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back Arrow" />
              <p>Back</p>
            </div>
            <NavLink onClick={() => setMobileMenuOpen(false)} className="py-2 pl-6 border-b" to='/'>
              Home
            </NavLink>
            <NavLink onClick={() => setMobileMenuOpen(false)} className="py-2 pl-6 border-b" to='/about'>
              About
            </NavLink>
            <NavLink onClick={() => setMobileMenuOpen(false)} className="py-2 pl-6 border-b" to='/collection'>
              Collection
            </NavLink>
            <NavLink onClick={() => setMobileMenuOpen(false)} className="py-2 pl-6 border-b" to='/contact'>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;