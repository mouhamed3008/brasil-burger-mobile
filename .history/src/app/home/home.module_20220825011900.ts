import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ItemCardPage } from '../components/item-card/item-card.page';
import { ItemCardPageModule } from '../components/item-card/item-card.module';
import { ItemListPageModule } from '../components/item-list/item-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicHeaderParallaxModule,
    ItemCardPageModule,
    ItemListPageModule,


  ],
  declarations: [HomePage]
})
export class HomePageModule {}
