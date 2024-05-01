import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
    name: "products",
    initialState:{
        filteredProducts:
        JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
        singleProduct:
        JSON.parse(sessionStorage.getItem("oneProduct")) || storeData
    },
    reducers:{
        filterProducts(state,action){
            try {
             const filter = storeData.filter((product)=>product.type === action.payload)

             state.filteredProducts = filter;
             //console.log("filter",filter)
             const saveState = JSON.stringify(filter);
             sessionStorage.setItem("filteredData",saveState);
            } catch (error) {
                throw new Error("Error in filter slice",error.message)
            }
        },

        singleProduct(state,action){
            try {
             const oneProduct = storeData.filter((product)=>product.id === action.payload)

             state.filteredProducts = oneProduct;
             //console.log("oneProduct",oneProduct)
             const saveState = JSON.stringify(oneProduct);
             sessionStorage.setItem("oneProduct",saveState);
            } catch (error) {
                throw new Error("Error in filter single product slice",error.message)
            }
        },
    }
})

export const {filterProducts,singleProduct} = productsSlice.actions;
export default productsSlice.reducer