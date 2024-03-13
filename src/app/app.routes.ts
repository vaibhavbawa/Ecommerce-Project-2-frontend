import { Routes } from '@angular/router';
import { HomeComponent } from './module/feture/component/home/home.component';
import { ProductsComponent } from './module/feture/component/products/products.component';
import { CartComponent } from './module/feture/component/cart/cart.component';
import { ProductDetailsComponent } from './module/feture/component/product-details/product-details.component';
import { CheckoutComponent } from './module/feture/component/checkout/checkout.component';
import { PaymentComponent } from './module/feture/component/payment/payment.component';
import { PaymentSuccessComponent } from './module/feture/component/payment-success/payment-success.component';
import { OrderComponent } from './module/feture/component/order/order.component';
import { OrderDetailsComponent } from './module/feture/component/order-details/order-details.component';
import { AdminComponent } from './module/admin/admin.component';
import { DashboardComponent } from './module/admin/components/dashboard/dashboard.component';
import { AdminProductComponent } from './module/admin/components/admin-product/admin-product.component';
import { OrdersTableComponent } from './module/admin/components/orders-table/orders-table.component';
import { CustomersComponent } from './module/admin/components/customers/customers.component';
import { CreateProductsComponent } from './module/admin/components/create-products/create-products.component';
import { NavContentComponent } from './module/shared/component/navbar/nav-content/nav-content.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"cart",component:CartComponent},
    {path:"product-details/:id",component:ProductDetailsComponent},
    {path:"products",component:ProductsComponent},
    {path:"checkout",component:CheckoutComponent},
    {path:"checkout/payment/:id",component:PaymentComponent},
    {path:':lavelOne/:lavelTwo/:lavelThree',component:ProductsComponent},
    {path:"payment-success",component:PaymentSuccessComponent},
    {path:"account/orders",component:OrderComponent},
    {path:"order/:id",component:OrderDetailsComponent},

    {path:"admin",component:AdminComponent,children:[
        {path:"",component:DashboardComponent},
        {path:"product",component:AdminProductComponent},
        {path:"orders",component:OrdersTableComponent},
        {path:"customers",component:CustomersComponent},
        {path:"product_create",component:CreateProductsComponent}
    ]}
];
