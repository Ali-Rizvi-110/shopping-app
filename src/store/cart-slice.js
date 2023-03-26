import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
        totalCartPrice: 0,
    },
    reducers: {
        addToCart(state, action){
            const newItem = action.payload;
            state.totalCartPrice+=newItem.price;
            // check if item is already available
            const existingItem = state.itemsList.find((item)=> item.id===newItem.id)
            if(existingItem){
                ++existingItem.quantity;
                existingItem.totalPrice+=newItem.price;
            }else{
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                })
            }
            ++state.totalQuantity;
        },
        removeFromCart(state, action){
            const remItem_id = action.payload;
            const myItem = state.itemsList.find((item) => item.id===remItem_id)
            state.totalCartPrice-=myItem.price;
            --state.totalQuantity;
            if(myItem.quantity>1)
                --myItem.quantity;
            else state.itemsList = state.itemsList.filter((item)=> item.id!==remItem_id);
            if(state.itemsList.length==0)
            {
                state.showCart = false;
            }
        },
        setShowCart(state){
            if(state.itemsList.length)
                state.showCart = !state.showCart;
        },
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;