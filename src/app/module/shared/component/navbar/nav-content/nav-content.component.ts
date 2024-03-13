
import { Component, Input } from '@angular/core';
import { navigation } from './nav-content';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-content',
  standalone: true,
  imports: [
    CommonModule
  ],
  
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.scss'
})
export class NavContentComponent {

  category:any
  @Input() selectedSection:any

  ngOnInit(){
    this.category=navigation;
    console.log("Selected Section", this.selectedSection)
  }

  constructor(private router:Router){}

  handleNavigate=(path:any)=>{
    this.router.navigate([path])
    console.log("path",path)
  }

}
