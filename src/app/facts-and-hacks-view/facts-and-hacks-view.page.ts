import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts-and-hacks-view',
  templateUrl: './facts-and-hacks-view.page.html',
  styleUrls: ['./facts-and-hacks-view.page.scss'],
})
export class FactsAndHacksViewPage implements OnInit {
  FactsHacks:any = [];

  constructor() { }

  ngOnInit() {
    this.FactsHacks = [
      {
        main_img : "../../assets/image/Sample_Images/trv1.jpeg",
        heading : "Lorem Ipsum has been the",
        profile_pic : "../../assets/image/Sample_Images/1.jpeg",
        user_name : "Michael",
        school : "St. Joseph School"
      },
      {
        main_img : "../../assets/image/Sample_Images/trv2.jpeg",
        heading : "Lorem Ipsum has been the",
        profile_pic : "../../assets/image/Sample_Images/2.jpeg",
        user_name : "Michael",
        school : "St. Joseph School"
      },
      {
        main_img : "../../assets/image/Sample_Images/trv3.jpeg",
        heading : "Lorem Ipsum has been the",
        profile_pic : "../../assets/image/Sample_Images/3.jpeg",
        user_name : "Michael",
        school : "St. Joseph School"
      },
      {
        main_img : "../../assets/image/Sample_Images/trv4.jpeg",
        heading : "Lorem Ipsum has been the",
        profile_pic : "../../assets/image/Sample_Images/4.jpeg",
        user_name : "Michael",
        school : "St. Joseph School"
      },
      {
        main_img : "../../assets/image/Sample_Images/trv1.jpeg",
        heading : "Lorem Ipsum has been the",
        profile_pic : "../../assets/image/Sample_Images/1.jpeg",
        user_name : "Michael",
        school : "St. Joseph School"
      },
      {
        main_img : "../../assets/image/Sample_Images/trv2.jpeg",
        heading : "Lorem Ipsum has been the",
        profile_pic : "../../assets/image/Sample_Images/2.jpeg",
        user_name : "Michael",
        school : "St. Joseph School"
      },
      {
        main_img : "../../assets/image/Sample_Images/trv3.jpeg",
        heading : "Lorem Ipsum has been the",
        profile_pic : "../../assets/image/Sample_Images/3.jpeg",
        user_name : "Michael",
        school : "St. Joseph School"
      },
      {
        main_img : "../../assets/image/Sample_Images/trv4.jpeg",
        heading : "Lorem Ipsum has been the",
        profile_pic : "../../assets/image/Sample_Images/4.jpeg",
        user_name : "Michael",
        school : "St. Joseph School"
      }
    ];
    console.log('FactsHacks:',this.FactsHacks);
  }

}
