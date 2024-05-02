import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cart:[],
        amount:0,
        totalAmount: 0,
        totalPrice: 0
    },
    reducers:{
        addToCart(state,action){
         const productId = action.payload;
         try {
            const exist = state.cart.find((product)=>
                product.id === productId.id &&
                product.size === productId.size &&
                product.color === productId.color
            );
            if(exist){
                exist.amount++;
                exist.totalPrice += productId.price;
                state.totalAmount++;
                state.totalAmount += productId.price;
            }
            else{
                state.cart.push({
                    id: productId.id,
                    price: productId.price,
                    size: productId.size,
                    amount: 1,
                    img: productId.img,
                    totalPrice: productId.price,
                    name: productId.name,
                    text: productId.text,
                    color: productId.color,
                  });
                  state.totalAmount++;
                  state.totalPrice += productId.price;
            }
         } catch (error) {
            throw new Error("Error in addCart slice",error.message)
         }
        },

        removeFromCart(state, action) {
            const productId = action.payload;
            try {
              const exist = state.cart.find(
                (product) =>
                  product.id === productId.id &&
                  product.size === productId.size &&
                  product.color === productId.color
              );
              if (exist.amount === 1) {
                state.cart = state.cart.filter(
                  (product) =>
                    product.id !== productId.id ||
                    product.size !== productId.size ||
                    product.color !== productId.color
                );
                state.totalAmount--;
                state.totalPrice -= productId.price;
              } else {
                exist.amount--;
                exist.totalPrice -= productId.price;
                state.totalAmount--;
                state.totalPrice -= productId.price;
              }
            } catch (error) {
                throw new Error("Error in removeCart slice",error.message)
            }
        },

    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer