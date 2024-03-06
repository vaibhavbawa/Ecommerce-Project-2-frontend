import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AddressCardComponent } from '../../../../shared/component/address-card/address-card.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {} from '@angular/material/button';
@Component({
  selector: 'app-addressform',
  standalone: true,
  imports: [
    MatDividerModule,
    AddressCardComponent,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './addressform.component.html',
  styleUrl: './addressform.component.scss'
})
export class AddressformComponent {

  addresses=[1,1,1];
  constructor(private formBuilder:FormBuilder){}
  myForm:FormGroup=this.formBuilder.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    streetAddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipCode:["",Validators.required],
    mobile:["",Validators.required],
  })
  handleCreateOrder(item:any){
   
  }

  handleSubmit=()=>{
    const formValue=this.myForm.value
    console.log("form data",formValue);
    
  }
}
