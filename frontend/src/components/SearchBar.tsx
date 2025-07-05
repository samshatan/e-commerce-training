import { assets } from "@/assets/frontend_assets/assets";
import { ShopContext } from "@/context/ShopContext";
import { useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

function SearchBar(){

  const shop = useContext(ShopContext);
  if(!shop) return null;
  const { search, setSearch, showSearch, setShowSearch } = shop;
  // const location = useLocation();
  // const [visible, setVisible] = useState(false);

  // useEffect(()=>{
  //   if(location.pathname.includes('collection')){
  //     setVisible(true);
  //   }
  //   else{
  //     setVisible(false);
  //   }
  // },[location])

  return showSearch /* && visible */ ? (
    <div className="flex text-center">
      <div className="inline-flex items-center justify-center border border-white px-5 py-2">
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="flex-1 outline-none bg-inherit text-sm" placeholder="Search" />
      </div>
    </div>
  ) : null
}
export default SearchBar;