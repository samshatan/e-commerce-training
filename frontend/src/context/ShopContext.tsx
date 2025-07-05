import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { products } from "../assets/frontend_assets/assets";

export interface ShopContextType {
  products: typeof products;
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider = (props: ShopContextProviderProps) => {
  const currency = "Rs ";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(true);

  const value: ShopContextType = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;