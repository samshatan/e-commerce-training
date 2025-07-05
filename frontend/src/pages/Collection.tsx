import { assets } from "@/assets/frontend_assets/assets";
import Title from "@/components/Title";
import { ShopContext } from "@/context/ShopContext";
import { useContext, useEffect, useState } from "react";
import ProductItem from "@/components/ProductItem";
import type { ProductType } from "@/components/ProductInterface";

function Collection(){

  const shop = useContext(ShopContext);
  if(!shop) return null;
  const {products, search, showSearch} = shop;
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const [sortType, setSortType] = useState('relevant');
  // const [subCategorySizes, setSubCategorySizes] = useState<string[]>([]);

  const handleCategory = (event: { target: { value: string; }; }) =>{
    if(category.includes(event.target.value)){
      setCategory(prev=>prev.filter(item => item !== event.target.value));
    }
    else{
      setCategory(prev => [...prev, event.target.value]);
      
    }
  }

  const handleSubCategory = (event: { target: { value: string; }; }) =>{
    if(subCategory.includes(event.target.value)){
      setSubCategory(prev=>prev.filter(item => item !== event.target.value));
    }
    else{
      setSubCategory(prev => [...prev, event.target.value]);
    }
  }

  // const handleSubCategorySizes = (event: { target: { value: string; }; }) =>{
  //   if(subCategorySizes.includes(event.target.value)){
  //     setSubCategorySizes(prev=>prev.filter(item => item !== event.target.value));
  //   }
  //   else{
  //     setSubCategorySizes(prev => [...prev, event.target.value]);
  //   }
  // }

  const applyFilter = () =>{
    let filterProducts = products.slice();

    if(showSearch && search){
      filterProducts = filterProducts.filter(item =>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length>0){
      filterProducts = filterProducts.filter(item => category.includes(item.category));
    }
    if(subCategory.length>0){
      filterProducts = filterProducts.filter(item => subCategory.includes(item.subCategory));
    }

    // if(subCategorySizes.length>0){
    //   filterProducts = filterProducts.filter(item => subCategorySizes.includes(item.subCategorySizes))
    // }
    setFilterProducts(filterProducts);
  }

  const applySort = () =>{
    let sortProducts = filterProducts.slice();
    switch(sortType){
      case 'low-high':
        setFilterProducts(sortProducts.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setFilterProducts(sortProducts.sort((a,b) => (b.price-a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category, subCategory, search, showSearch]);

  // useEffect(()=>{
  //   applyFilter();
  // },[])

  useEffect(()=>{
    applySort();
  },[sortType]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
        {/*Filter Section*/}
        <div className="min-w-60">
          <p onClick={()=> setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
            <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
          </p>
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium ">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={'Men'} onChange={handleCategory} />Men
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={'Women'} onChange={handleCategory} />Women
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={'Kids'} onChange={handleCategory} />Kids
              </p>
            </div>
          </div>
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium ">TYPES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={'Topwear'} onChange={handleSubCategory} />Topwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={'Bottomwear'} onChange={handleSubCategory} />Bottomwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={'Winterwear'} onChange={handleSubCategory} />Winterwear
              </p>
            </div>
          </div>
          {/* <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium ">SIZES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={'S'} onChange={handleSubCategorySizes} />Small
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={'M'} onChange={handleSubCategorySizes} />Medium
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={'L'} onChange={handleSubCategorySizes} />Large
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={'XL'} onChange={handleSubCategorySizes} />Extra Large
              </p>
            </div>
          </div> */}
        </div>
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={'All'} text2={'COLLECTIONS'}/>
            <select onChange={(eve)=>setSortType(eve.target.value)} className="border-2 border-gray-300 text-sm px-2">
              <option value="relevant">Sort by: Relavant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {
              filterProducts.map((item,index)=>(
                <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}
export default Collection;