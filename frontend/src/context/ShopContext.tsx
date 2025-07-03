import { createContext } from "react";
import type { ReactNode } from "react";
import { products } from "../assets/frontend_assets/assets";

export interface ShopContextType {
  products: typeof products;
  currency: string;
  delivery_fee: number;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider = (props: ShopContextProviderProps) => {
  const currency = "Rs ";
  const delivery_fee = 10;
  const value: ShopContextType = {
    products,
    currency,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;