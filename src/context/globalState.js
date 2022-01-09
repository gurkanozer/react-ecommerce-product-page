import React, { createContext, useReducer } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
// import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from './actionTypes';
import cartReducer from "./cartReducer";
const initialState = {
  cart: [],
  product: {
    title: "Fall Limited Edition Sneakers",
    brand: "Sneaker Company",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    imgGallery: [
      {
        src: "image-product-1.jpg",
        alt: "Product Image 1"
      },
      {
        src: "image-product-2.jpg",
        alt: "Product Image 2"
      },
      {
        src: "image-product-3.jpg",
        alt: "Product Image 3"
      },
      {
        src: "image-product-4.jpg",
        alt: "Product Image 4"
      },
    ],
    price: "250.00",
    disocuntedPrice: "125.00",
    discount: "50"
  },
  theme: {
    colors: {
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      blackTransparent: "rgba(0,0,0,0.75)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      grayishBlue: "hsl(220, 14%, 75%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      darkBlue: "hsl(220, 13%, 13%)",
    },
    font: {
      family: "'Kumbh Sans', sans-serif",
    },
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useReducer(cartReducer, initialState.cart);
  const theme = initialState.theme;
  const product = initialState.product;
  //ACTIONS
  const addToCart = (payload) =>{
    setCart({type:ADD_TO_CART,payload});
  }
  const removeFromCart = (payload) =>{
    //There is only 1 item in project so don't need any info about item.
    setCart({type:REMOVE_FROM_CART, payload});
  }
  return (
    <GlobalContext.Provider value={{ cart, theme,product, addToCart, removeFromCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
