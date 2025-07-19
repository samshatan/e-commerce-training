import { assets } from "@/assets/frontend_assets/assets";
import type { ProductType } from "@/components/ProductInterface";
import Related from "@/components/Related";
import { ShopContext } from "@/context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product(){

  const {productId} = useParams();
  const shop = useContext(ShopContext);
  if(!shop || productId === undefined) return null;
  const { products, currency, addToCart } = shop;
  const [productData, setProductData] = useState<ProductType | undefined>(undefined);
  const [image, setImage] = useState('');
  const [size, setSizes] = useState<string>('');

  const fetchData = async () =>{
    products.map((item) => {
      if (item.id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        if(item.sizes && item.sizes.length>0){
          setSizes(item.sizes[0]);
        }
        else{
          setSizes('One Size');
        }
        return null;
      }
    });
  };

  useEffect(()=>{
    fetchData();
  },[productId, products]);

  const handleCart = () =>{
    if(productData && size){
       addToCart(productId, size);
    }
    else{
      alert('Please Select a size');
    }
  };

  return productData ? (
    <div className="pt-10 transition-opacity ease-in duration-500 opacity-100 m-3 ">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-2xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes && productData.sizes.length>0 ? productData.sizes.map((item,index)=>(
                <button onClick={()=>setSizes(item)} className={`border py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              )): (
                <p className="text-gray-500">No sizes Available fot this product</p>
              )}
            </div>
          </div>
          <button className="bg-black text-white px-6 py-3 text-sm active:bg-gray-700" onClick={() => handleCart()} >ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash On Delivery is Available on this Product</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex ">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, porro!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nisi.</p>
        </div>
      </div>
      <Related category={productData.category} subCategory = {productData.subCategory} />
    </div>
  ) : <div className="opacity-0"></div>
}
export default Product;