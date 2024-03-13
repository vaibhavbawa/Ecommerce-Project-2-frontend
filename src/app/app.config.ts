import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { authReducer } from './state/Auth/auth.reducer';
import { userRetucer } from './state/User/user.reducer';
import { productReducer } from './state/Product/product.reducer';
import { cartReducer } from './state/Cart/cart.reducer';
import { orderReducer } from './state/Order/order.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideStore({
      auth:authReducer, 
      user:userRetucer, 
      product:productReducer, 
      cart:cartReducer,
      order:orderReducer
    })],
};
