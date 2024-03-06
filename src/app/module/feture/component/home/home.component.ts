import { Component } from '@angular/core';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { HomeProductCardComponent } from './home-product-card/home-product-card.component';
import { HomeProductSliderComponent } from './home-product-slider/home-product-slider.component';
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { womenGouns } from '../../../../../Data/Gouns/gouns';
import { lenghaCholi } from '../../../../../Data/Women/lenghaCholi';
import { mensKurta } from '../../../../../Data/Men/mensKurta';
import { mensShoes } from '../../../../../Data/shose/shose';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
     MainCarouselComponent,
     HomeProductCardComponent,
     HomeProductSliderComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menJeans:any;
  womenGouns:any;
  lenghaCholi:any;
  mensKurta:any;
  mensShoes:any;

  ngOnInit(){
    this.menJeans=menJeans.slice(0,4);
    this.womenGouns=womenGouns.slice(0,4);
    this.lenghaCholi=lenghaCholi.slice(0,4);
    this.mensKurta=mensKurta.slice(0,4);
    this.mensShoes=mensShoes.slice(0,4);
  }
}
