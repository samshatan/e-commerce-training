import { ShopContext } from "@/context/ShopContext";
import { useContext, useEffect, useState, useMemo } from "react";
import type { ProductType } from "./ProductInterface";
import Title from "./Title";
import ProductItem from "./ProductItem";

function BestSeller() {
  const shop = useContext(ShopContext);
  const [bestProducts, setBestProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filteredBestSellers = useMemo(() => {
    if (!shop?.products) return [];
    return shop.products.filter((item) => item.bestseller);
  }, [shop?.products]);

  useEffect(() => {
    try {
      setIsLoading(true);
      setError(null);
      
      if (filteredBestSellers.length > 0) {
        setBestProducts(filteredBestSellers.slice(0, 10));
      } else if (shop?.products && shop.products.length > 0) {
        setBestProducts(shop.products.slice(0, 10));
      }
    } catch (err) {
      setError("Failed to load best sellers");
      console.error("BestSeller component error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [filteredBestSellers, shop?.products]);

  if (!shop) {
    return <div className="text-center py-8">Unable to load shop context</div>;
  }

  if (isLoading) {
    return (
      <div className="my-10">
        <div className="text-center text-3xl py-8">
          <Title text1={'Best'} text2={'SELLERS'}/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {Array(10).fill(0).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 aspect-square rounded mb-2"></div>
              <div className="bg-gray-200 h-4 rounded mb-1"></div>
              <div className="bg-gray-200 h-4 w-20 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-10 text-center">
        <p className="text-red-500">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  if (bestProducts.length === 0) {
    return (
      <div className="my-10 text-center">
        <Title text1={'Best'} text2={'SELLERS'}/>
        <p className="text-gray-500">No best sellers available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={'Best'} text2={'SELLERS'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover the top-selling products in our store, handpicked just for you.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestProducts.map((item) => (
          <ProductItem 
            key={`${item.id}-${item.name}`} // More unique key
            id={item.id} 
            image={item.image} 
            name={item.name} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;