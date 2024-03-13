import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { addItemToCartFailure, addItemToCartRequest, addItemToCartSuccess, getCartFailure, getCartRequest, getCartSuccess, removeCartItemFailure, removeCartItemRequest, removeCartItemSuccess, updateCartItemFailure, updateCartItemRequest, updateCartItemSuccess } from "./cart.action";


export interface CartSate{
    cartItems:any[];
    loading:boolean;
    error:any;
    cart:any
}

export const initialState:CartSate = {
    cartItems: [],
    loading: false,
    error:null,
    cart:null,
}

export const cartReducer = createReducer(
    initialState,

    on(addItemToCartRequest,
        getCartRequest,
        removeCartItemRequest,
        updateCartItemRequest, 
        (state)=>({
        ...state,
        loading:true,
        error:null,
    })),
    on(addItemToCartSuccess,(state, action)=>({
        ...state,
        loading:false,
        cartItems: [...state.cartItems, action.payload],
    })),
    on(addItemToCartFailure,
        getCartFailure,
        removeCartItemFailure,
        updateCartItemFailure,
         (state, action)=>({
        ...state,
        loading:false,
        error:action.error
    })),

    on(getCartSuccess, (state, action)=>({
        ...state,
        loading:false,
        cartItems: action.payload.cartItems,
        cart:action.payload
    })),

    on(removeCartItemSuccess, (state, action) =>({
        ...state,
        loading:false,
        cartItems: state.cartItems.filter((item) => item.id !== action.cartItemId)
    })),
    on(updateCartItemSuccess, (state, action)=>({
        ...state,
        cartItems: state.cartItems.map((item) => 
        item.id === action.payload.id ? action.payload :item
        ),
    }))

)