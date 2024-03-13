

import { createReducer, on } from "@ngrx/store";
import { createOrderFailure, createOrderRequest, createOrderSuccess, getOrderByIdFailure, getOrderByIdRequest, getOrderByIdSuccess, getOrderHistoryFailure, getOrderHistoryRequset, getOrderHistorySuccess } from "./order.action";
import { state } from "@angular/animations";

export interface OrderState{
    loading : boolean;
    error: string | null;
    order:any | null;
    orders:any[];
}

const initialState :OrderState ={
    loading:false,
    error:null,
    order:null,
    orders:[],
};

export const orderReducer = createReducer(
    initialState,
    on(createOrderRequest,
        getOrderByIdRequest,
        getOrderHistoryRequset,
         (state) => ({
        ...state,
        loading:true,
        error:null,
    })),

    on(createOrderSuccess, (state, {order}) => ({
        ...state,
        loading:false,
        order,
    })),

    on(createOrderFailure,
        getOrderByIdFailure,
        getOrderHistoryFailure,
         (state, {error}) =>({
        ...state,
        loading:false,
        error,
    })),

    on(getOrderByIdSuccess,(state, {order}) => ({
        ...state,
        loading:false,
        order
    })),

    on(getOrderHistorySuccess, (state, {orders})=> ({
        ...state,
        loading:false,
        orders
    })),
)


