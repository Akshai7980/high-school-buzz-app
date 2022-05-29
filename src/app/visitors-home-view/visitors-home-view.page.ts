import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-visitors-home-view',
  templateUrl: './visitors-home-view.page.html',
  styleUrls: ['./visitors-home-view.page.scss'],
})
export class VisitorsHomeViewPage implements OnInit {

  UserDetails:any = [];
  OngoingBuzz:any = [];

  constructor(
    private common: CommonService,
  ) { }

  ngOnInit() {

    this.OngoingBuzz = [
      {
        caption : "Don't be so shy, tell us your true colours!",
        ending_time : "08 May 2021",
        like : "1k",
        comment : "1k",
        image1 : "../../assets/image/Sample_Images/2.jpeg",
        image2 : "../../assets/image/Sample_Images/11.jpeg",
        image3 : "../../assets/image/Sample_Images/12.jpeg",
        image4 : "../../assets/image/Sample_Images/13.jpeg",
      },
      {
        caption : "Don't be so shy, tell us your true colours!",
        ending_time : "08 May 2021",
        like : "1k",
        comment : "1k",
        image1 : "../../assets/image/Sample_Images/2.jpeg",
        image2 : "../../assets/image/Sample_Images/11.jpeg",
        image3 : "../../assets/image/Sample_Images/12.jpeg",
        image4 : "../../assets/image/Sample_Images/13.jpeg",
      },
      {
        caption : "Don't be so shy, tell us your true colours!",
        ending_time : "08 May 2021",
        like : "1k",
        comment : "1k",
        image1 : "../../assets/image/Sample_Images/2.jpeg",
        image2 : "../../assets/image/Sample_Images/11.jpeg",
        image3 : "../../assets/image/Sample_Images/12.jpeg",
        image4 : "../../assets/image/Sample_Images/13.jpeg",
      },
      {
        caption : "Don't be so shy, tell us your true colours!",
        ending_time : "08 May 2021",
        like : "1k",
        comment : "1k",
        image1 : "../../assets/image/Sample_Images/2.jpeg",
        image2 : "../../assets/image/Sample_Images/11.jpeg",
        image3 : "../../assets/image/Sample_Images/12.jpeg",
        image4 : "../../assets/image/Sample_Images/13.jpeg",
      },
    ];
    console.log('OngoingBuzz:',this.OngoingBuzz);
  }

  ionViewWillEnter(){
    this.UserDetails = [
      {
        user_name : "Abayomi Axton",
        profile_pic : "../../assets/image/Sample_Images/1.jpeg",
        standard : "10 B",
        school_name : "King Edward High School",
        buzz_created : "380",
        likes : "50K",
        commentators : "1.1M",
        comments : "2.3M",
      }
    ];
    console.log('UserDetails:',this.UserDetails);

  }


}
