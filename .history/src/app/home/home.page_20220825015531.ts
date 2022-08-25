import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { DataService } from '../data.service';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];
  selectedSize: number;
  selectedColor: number;
  activeVariation: string;
  segment = 'card';


  constructor(
    private data: DataService,
    private animatioCntrl: AnimationController,
    private catalogueService: CatalogueService
  ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();
  }

  // segmentChanged(e: any) {
  //   this.activeVariation = e.detail.value;

  //   if (this.activeVariation === 'color') {
  //     this.animatioCntrl.create()
  //     .addElement(document.querySelector('.sizes'))
  //     .duration(500)
  //     .iterations(1)
  //     .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
  //     .fromTo('opacity', '1', '0.2')
  //     .play();

  //     this.animatioCntrl.create()
  //     .addElement(document.querySelector('.colors'))
  //     .duration(500)
  //     .iterations(1)
  //     .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
  //     .fromTo('opacity', '0.2', '1')
  //     .play();
  //   } else {
  //     this.animatioCntrl.create()
  //     .addElement(document.querySelector('.sizes'))
  //     .duration(500)
  //     .iterations(1)
  //     .fromTo('transform', 'translateX(100%)', 'translateX(0)')
  //     .fromTo('opacity', '0.2', '1')
  //     .play();

  //     this.animatioCntrl.create()
  //     .addElement(document.querySelector('.colors'))
  //     .duration(500)
  //     .iterations(1)
  //     .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
  //     .fromTo('opacity', '1', '0.2')
  //     .play();
  //   }
  // }

  changeSize(size: number) {
    this.selectedSize = size;
  }

  changeColor(color: number) {
    this.selectedColor = color;
  }




  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  loadData(event) {
    // setTimeout(() => {
    //   event.target.complete();
    //   if (this.productsMenu.length === 500 || this.productsBurger.length === 500) {
    //     event.target.disabled = true;
    //   }
    // }, 1000);
  }
}
