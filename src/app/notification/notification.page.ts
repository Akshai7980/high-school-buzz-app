import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  Notifications: any = [];

  constructor() { }

  ngOnInit() {
    this.Notifications = [
      {
        time : "Today, 11:44 pm",
        text : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving",
        sub_text : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving"
      },
      {
        time : "Today, 11:44 pm",
        text : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving",
        sub_text : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving"
      },
      {
        time : "Today, 11:44 pm",
        text : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving",
        sub_text : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving"
      },
      {
        time : "Today, 11:44 pm",
        text : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving",
        sub_text : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving"
      },
      {
        time : "Today, 11:44 pm",
        text : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving",
        sub_text : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving"
      },
      {
        time : "Today, 11:44 pm",
        text : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving",
        sub_text : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving"
      },
    ]
  }

}
