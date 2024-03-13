import { createAction, props } from "@ngrx/store";



export const findProductByCategoryRequest = createAction(
    '[Product] Find Product By Category Request'
)

export const findProductByCategorySuccess = createAction(
    '[Product] Find Products By Category Success',
    props<{payload:any}>()
)

export const findProductByCategoryFailure = createAction(
    '[Product] Find Product By Category Failure',
    props<{error:any}>()
)


export const findProductByIdRequest = createAction(
    '[product] Find Product By Id Request'
)

export const findProductByIdSuccess = createAction(
    '[Product] Find Products By Id Success',
    props<{payload:any}>()
)

export const findProductByIdFailure = createAction(
    '[Product] Find Products By Id Failure',
    props<{error:any}>()
)