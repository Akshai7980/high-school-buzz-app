import { Component } from '@angular/core';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private common: CommonService,
  ) {}

  gotoPage(page:string) {
    const p = page;
    this.common.navController.navigateForward([p]);
  }

}
