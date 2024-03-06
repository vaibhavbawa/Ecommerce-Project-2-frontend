import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { RouterOutlet } from '@angular/router';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { CustomersComponent } from './components/customers/customers.component';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    DashboardComponent,
    AdminProductComponent,
    OrdersTableComponent,
    CustomersComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
