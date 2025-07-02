import { ShopContext } from "@/context/ShopContext";
import { useContext, useEffect, useState } from "react";
import type { ProductType } from "./ProductInterface";
import Title from "./Title";
import ProductItem from "./ProductItem";

function BestSeller(){

  const shop = useContext(ShopContext);
    if(!shop) return null;
    const { products } = shop;
  
    const [BestProduct, setBestProducts] = useState<ProductType[]>([]);
  
    useEffect(()=>{
      const bestProduct = products.filter((item)=> item.bestseller);
      setBestProducts(bestProduct.slice(0,10));
    },[])

  return(
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={'Best'} text2={'SELLERS'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover the top-selling products in our store, handpicked just for you.
        </p>
      </div>

      <div className="grid grid-cols sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
        {BestProduct.map((item,index)=>(
          <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  )
}
export default BestSeller;