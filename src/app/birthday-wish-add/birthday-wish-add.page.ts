import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-wish-add',
  templateUrl: './birthday-wish-add.page.html',
  styleUrls: ['./birthday-wish-add.page.scss'],
})
export class BirthdayWishAddPage implements OnInit {
  SpecialWishes: string = '';
  constructor() { }

  ngOnInit() {
  }

}
