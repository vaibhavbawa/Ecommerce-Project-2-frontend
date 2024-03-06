import { Component, HostListener } from '@angular/core';
import { NavContentComponent } from './nav-content/nav-content.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavContentComponent,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentSection:any
  isNavbarContentOpen:any

  constructor(private router:Router){}

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
}
