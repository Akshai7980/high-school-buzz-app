import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-detail',
  templateUrl: './birthday-detail.page.html',
  styleUrls: ['./birthday-detail.page.scss'],
})
export class BirthdayDetailPage implements OnInit {
  SpecialWishes: string = '';

  constructor() { }

  ngOnInit() {
  }

}
