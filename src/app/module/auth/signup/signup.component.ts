import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInput } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../state/Auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatInput,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  @Input() changeTemplate:any;
  
  constructor(private formBuilder:FormBuilder, private store:Store, private authService:AuthService){}
  loginForm : FormGroup = this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(8)]]
  });
  

  submitForm(): void{
    if(this.loginForm.valid){
      console.log("login req data",this.loginForm.value);
      this.authService.register(this.loginForm.value)
    }
  }
}
