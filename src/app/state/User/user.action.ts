import { createAction, props } from "@ngrx/store"


export const getUserProfile=createAction('[user] Get User Profile')

export const getUserProfileSuccess=createAction('[user] Get User Profile Success', props<{userProfile:any}>())

export const getUserProfileFailure=createAction('[user] Get User Profile Failure', props<{error:any}>())



export const logOutSuccess=createAction('[user] Logout Success')