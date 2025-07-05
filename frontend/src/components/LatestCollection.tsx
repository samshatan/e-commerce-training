import type { ProductType } from "./ProductInterface";
import { ShopContext } from "@/context/ShopContext";
import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollection(){

  const shop = useContext(ShopContext);
  if(!shop) return null;
  const { products } = shop;

  const [latestProducts, setLatestProducts] = useState<ProductType[]>([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[])

  return(
    <div className="my-10"> 
      <div className="text-center py-8 text-3xl">
        <Title text1={'Latest'} text2={'COLLECTIONS'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover the newest additions to our collection, featuring the latest trends and styles.
        </p>
      </div>

      <div className="grid grid-cols sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
        {latestProducts.map((item,index)=>(
          <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>

    </div>
  )
}
export default LatestCollection;