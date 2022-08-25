import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
