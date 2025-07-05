import { ShopContext } from "@/context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product(){

  const {productId} = useParams();
  const shop = useContext(ShopContext);
  if(!shop) return null;
  const { products } = shop;
  const [productData, setProductData] = useState(false);

  const fetchData = async (item) =>{
    products.map((item) => {
      if (item.id === productId) {
        setProductData(item);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(()=>{
    fetchData();
  },[productId, products]);

  return(
    <div className="">
      
    </div>
  )
}
export default Product;