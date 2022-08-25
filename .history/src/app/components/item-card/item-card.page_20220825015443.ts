import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Products } from 'src/app/models/models';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.page.html',
  styleUrls: ['./item-card.page.scss'],
})
export class ItemCardPage implements OnInit {
  @Input() item: Products;

  @Output() clicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
