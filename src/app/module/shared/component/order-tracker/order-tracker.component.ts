import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order-tracker',
  standalone: true,
  imports: [MatIconModule,MatDividerModule,CommonModule],
  templateUrl: './order-tracker.component.html',
  styleUrl: './order-tracker.component.scss'
})
export class OrderTrackerComponent {
  @Input() activeStep:any;
  @Input() steps:any;
}
