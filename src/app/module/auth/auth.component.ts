import { Component } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../state/Auth/auth.service';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    SigninComponent,
    SignupComponent,
    CommonModule
  ],
  providers: [AuthService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

    isLoggedIn=true;
    
    changeTemplate=()=>{
      this.isLoggedIn=!this.isLoggedIn;
    }
}
