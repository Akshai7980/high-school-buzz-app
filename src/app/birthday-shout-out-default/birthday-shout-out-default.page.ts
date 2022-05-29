import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-shout-out-default',
  templateUrl: './birthday-shout-out-default.page.html',
  styleUrls: ['./birthday-shout-out-default.page.scss'],
})
export class BirthdayShoutOutDefaultPage implements OnInit {
  
  Celebrants:any = [];

  constructor() { }

  ngOnInit() {
    this.Celebrants = [
      {
        profile_img : "../../assets/image/Sample_Images/1.jpeg",
        user_name : "James Daniel",
        Bday_wish : "Hey today is my birthday!",
        like_count : "20k",
        comment_count : "20k",
        wish_count : "20k"
      },
      {
        profile_img : "../../assets/image/Sample_Images/2.jpeg",
        user_name : "Daniel James",
        Bday_wish : "Hey today is my birthday!",
        like_count : "20k",
        comment_count : "20k",
        wish_count : "20k"
      },
      {
        profile_img : "../../assets/image/Sample_Images/3.jpeg",
        user_name : "James Daniel",
        Bday_wish : "Hey today is my birthday!",
        like_count : "20k",
        comment_count : "20k",
        wish_count : "20k"
      },
      {
        profile_img : "../../assets/image/Sample_Images/4.jpeg",
        user_name : "Daniel James",
        Bday_wish : "Hey today is my birthday!",
        like_count : "20k",
        comment_count : "20k",
        wish_count : "20k"
      },
    ];
    console.log('Celebrants:',this.Celebrants);
  }

}
