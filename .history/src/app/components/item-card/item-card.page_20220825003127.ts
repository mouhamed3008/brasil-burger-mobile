import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.page.html',
  styleUrls: ['./item-card.page.scss'],
})
export class ItemCardPage implements OnInit {
  @Input() item: any;

  @Output() clicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
