import React, { createContext, FC, useEffect, useState } from "react";
import { PRODUCT_INITIAL_STATE, USER_INITIAL_STATE } from "../constants/defaultValues.constants";

interface StoreContextState {
  user: any;
  products: any[];
  selectedProducts: any[];
}

const StoreContextDefault: StoreContextState = {
  user: USER_INITIAL_STATE,
  products: [PRODUCT_INITIAL_STATE],
  selectedProducts: [],
}

export const StoreContext = createContext<StoreContextState>(StoreContextDefault);

export const StoreProvider: FC<any> = ({ children }: any) => {
  const [user, setUser] = useState(USER_INITIAL_STATE);
  const [products, setProducts] = useState([PRODUCT_INITIAL_STATE]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const resetStates = () => {
    setUser(USER_INITIAL_STATE);
    setProducts([PRODUCT_INITIAL_STATE]);
    setSelectedProducts([]);
  };

  useEffect(() => {
    if (!user) resetStates;
  }, [user]);

  return (
    <StoreContext.Provider
      value = {{
        user: [user, setUser],
        products: [products, setProducts],
        selectedProducts: [selectedProducts, setSelectedProducts]
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}