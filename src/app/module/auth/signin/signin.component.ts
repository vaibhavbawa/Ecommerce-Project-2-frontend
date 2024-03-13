import { Component, Input } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../state/Auth/auth.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule, 
    MatInput, 
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  @Input() changeTemplate:any;

  constructor(private formBuilder:FormBuilder, 
    private store:Store, 
    private authService:AuthService
    ){}

  loginForm : FormGroup = this.formBuilder.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(8)]]
  });

  submitForm(){
    if(this.loginForm.valid){
      console.log("login req data",this.loginForm.value);
      this.authService.login(this.loginForm.value)
    }
  }
}
