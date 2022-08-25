import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemCardPageRoutingModule } from './item-card-routing.module';

import { ItemCardPage } from './item-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemCardPageRoutingModule
  ],
  declarations: [ItemCardPage],
  exports: [ItemCardPage]
})
export class ItemCardPageModule {}
