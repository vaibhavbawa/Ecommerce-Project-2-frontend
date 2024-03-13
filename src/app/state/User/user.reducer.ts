import { state } from "@angular/animations"
import { createReducer, on } from "@ngrx/store"
import { getUserProfile, getUserProfileFailure, getUserProfileSuccess, logOutSuccess } from "./user.action"

const initialState = {
    userProfile:null,
    loading:false,
    error:null
}

export const userRetucer = createReducer(
    initialState,
    on(getUserProfile, (state)=>({...state, loading:true, error:null})),
    on(getUserProfileSuccess, (state, {userProfile})=>({...state, loading:false, error:null, userProfile})),
    on(getUserProfileFailure, (state, {error})=>({...state, loading:true, error:error})),

    on(logOutSuccess,()=>initialState)

)
