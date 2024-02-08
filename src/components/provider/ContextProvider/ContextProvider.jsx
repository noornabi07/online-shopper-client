import React, { createContext } from 'react';
import all_product from '../../assets/all-products/all_product';


export const ShopContext = createContext(null)
const ContextProvider = (props) => {

    const contextValue = {all_product}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ContextProvider;