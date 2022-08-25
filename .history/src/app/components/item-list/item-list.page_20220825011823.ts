import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {
  @Input() item: any;

  @Output() clicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
