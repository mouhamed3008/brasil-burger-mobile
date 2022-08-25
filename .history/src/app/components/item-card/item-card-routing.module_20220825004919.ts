import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemCardPage } from './item-card.page';

const routes: Routes = [
  {
    path: '',
    component: ItemCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemCardPageRoutingModule {}
