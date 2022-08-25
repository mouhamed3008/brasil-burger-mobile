import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';

import { UtilService } from './util.service';
import { menuController } from '@ionic/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
   isMenuEnabled: boolean ;
   selectedIndex = 0;
   @ViewChild('popover') popover;

  isOpen = false;

  constructor(
    private platform: Platform,

    private util: UtilService,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {


  }

  ngOnInit() {
    this.selectedIndex = 1;

    this.util.getMenuState().subscribe(menuState => {
      this.isMenuEnabled = menuState;
    });
  }

  navigate(path, selectedId) {
    this.selectedIndex = selectedId;
    this.router.navigate([path]);
  }

  close() {
    menuController.toggle();
  }



  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
