import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ItemCardPage } from '../components/item-card/item-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicHeaderParallaxModule,
    ItemCardPage

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
