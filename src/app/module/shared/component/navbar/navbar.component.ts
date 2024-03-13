import { Component, HostListener } from '@angular/core';
import { NavContentComponent } from './nav-content/nav-content.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AuthComponent } from '../../../auth/auth.component';
import { UserService } from '../../../../state/User/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../models/AppState';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavContentComponent,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    MatDialogModule
  ],
  providers:[UserService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentSection:any
  isNavbarContentOpen:any
  userProfile:any

  constructor(private router:Router, 
    private dialog:MatDialog, 
    private userService:UserService, 
    private store:Store<AppState>
    ){}

  openNavbarContent(section:any){
this.isNavbarContentOpen=true;
this.currentSection=section;
  }
  closeNavbarContent(){
    this.isNavbarContentOpen=false;
  }
  navigateTo(path:any){
    this.router.navigate([path]);
  }

  ngOnInit(){
    if(localStorage.getItem("jwt")) this.userService.getUserProfile()
    this.store.pipe(select((store)=>store.user)).subscribe((user)=>{
      this.userProfile=user.userProfile;
      if(user.userProfile){
        this.dialog.closeAll()
      }
      console.log("user",user);
  })
  }

@HostListener('document:click',['$event'])
  onDocumentClick(event:MouseEvent){
    const modalContainer =document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');

    let clickInsideButton=false

    openButtons.forEach((button:Element)=>{
      if(button.contains(event.target as Node)){
        clickInsideButton=true;
      }
    })
    if(modalContainer && !clickInsideButton && this.isNavbarContentOpen){
      this.closeNavbarContent();
    }
  }

  handleOpenLoginModal=()=>{
    this.dialog.open(AuthComponent,{
      width:"400px",
      disableClose:false
    })
  }

  handleLogout=()=>{
    this.userService.logOut()
  }
}
