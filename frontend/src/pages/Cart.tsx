import { ShopContext } from '@/context/ShopContext';
import React, { useContext } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react';

const Cart: React.FC = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error('Cart must be used within a ShopContextProvider');
  }

  const { cartItems, removeFromCart, updateQuantity, getTotalCartAmount, getTotalCartItems, currency, delivery_fee, clearCart } = context;

  const handleQuantityChange = (id: string, size: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, size, newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Shopping Cart</h1>
          </div>
          <div className="bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-sm sm:text-base self-start sm:self-auto">
            {getTotalCartItems()} {getTotalCartItems() === 1 ? 'item' : 'items'}
          </div>
        </div>
        {cartItems.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <ShoppingBag className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gray-300 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Add some items to get started!</p>
            <button className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            <div className="xl:col-span-2">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Cart Items</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col sm:flex-row items-start justify-between">
                        <div className='flex flex-row gap-6 sm:items-center'>
                          <div className="flex-shrink-0 w-half sm:w-auto">
                            <img
                              src={Array.isArray(item.image) ? item.image[0] : item.image}
                              alt={item.name}
                              className="w-full sm:w-16 md:w-20 h-32 sm:h-16 md:h-20 object-cover rounded-lg border border-gray-200"
                            />
                          </div>
                          <div className="flex-1 min-w-0 w-half sm:w-auto">
                            <h3 className="text-base sm:text-lg font-medium text-gray-900">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600">Size: {item.size}</p>
                            <p className="text-xl sm:text-2xl font-bold text-blue-600 mt-1">
                              {currency}{item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto my-3">
                            <div className="flex items-center bg-gray-100 rounded-lg">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                                className="p-2 sm:p-2 hover:bg-gray-200 rounded-l-lg transition-colors touch-manipulation"
                                disabled={item.quantity <= 1}
                                aria-label={`Decrease quantity of ${item.name} size ${item.size}`}
                              >
                                <Minus className="w-4 h-4 text-gray-600" />
                              </button>
                              <span className="px-3 sm:px-4 py-2 font-semibold text-gray-900 min-w-[50px] sm:min-w-[60px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                                className="p-2 sm:p-2 hover:bg-gray-200 rounded-r-lg transition-colors touch-manipulation"
                                aria-label='Plus the quantity'
                              >
                                <Plus className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                            
                            {/* Remove Button */}
                            <button
                              onClick={() => removeFromCart(item.id, item.size)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors touch-manipulation"
                              title="Remove item"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-100 text-gray-700 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm sm:text-base"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="xl:col-span-1 mt-6 xl:mt-0">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-4 sm:top-8">
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Order Summary</h2>
                </div>
                
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                    <span>Subtotal</span>
                    <span>{currency}{getTotalCartAmount().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                    <span>Delivery Fee</span>
                    <span>{currency}{delivery_fee.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3 sm:pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg sm:text-xl font-bold text-gray-900">Total</span>
                      <span className="text-xl sm:text-2xl font-bold text-blue-600">
                        {currency}{(getTotalCartAmount() + delivery_fee).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 bg-gray-50">
                  <button className="w-full bg-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg touch-manipulation">
                    <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                    Proceed to Checkout
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-2 sm:mt-3">
                    Secure checkout with SSL encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;