import { Component, OnInit} from '@angular/core';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  ShowWhatsOnMind: boolean = false;
  WhatsOnMindText: string = '';
  UserDetails:any = [];
  OngoingBuzz:any = [];
  BoardImage:any = [];
  LatestBuzz:any = [];
  i = 0;

  constructor(
    private common: CommonService,
  ) {}

  ngOnInit() {
    this.i = 0;
    
    this.BoardImage = [
      [
        {
          img : "../../assets/image/board1.png",
          name : "Bulletin"
        },
        {
          img : "../../assets/image/board2.png",
          name : "StudyGroup"
        },
        {
          img : "../../assets/image/board3.png",
          name : "Birthday"
        },
      ],
      [
      {
        img : "../../assets/image/board4.png",
        name : "Learning"
      },
      {
        img : "../../assets/image/board5.png",
        name : "Facts"
      },
      {
        img : "../../assets/image/board6.png",
        name : "Contest"
      },
      ]
    ];
    console.log('BoardImage:',this.BoardImage);

    this.LatestBuzz = [
      {
        user_name : "James",
        profile_pic : "../../assets/image/Sample_Images/1.jpeg",
        posted_time : "10",
        caption : "Don't be so shy, tell us your true colours!",
        like : "1k",
        comment : "1k",
        image1 : "../../assets/image/Sample_Images/2.jpeg",
        image2 : "../../assets/image/Sample_Images/11.jpeg",
        image3 : "../../assets/image/Sample_Images/12.jpeg",
        image4 : "../../assets/image/Sample_Images/13.jpeg",
      },
      {
        user_name : "James",
        profile_pic : "../../assets/image/Sample_Images/1.jpeg",
        posted_time : "10",
        caption : "Don't be so shy, tell us your true colours!",
        like : "1k",
        comment : "1k",
        image1 : "../../assets/image/Sample_Images/2.jpeg",
        image2 : "../../assets/image/Sample_Images/11.jpeg",
        image3 : "../../assets/image/Sample_Images/12.jpeg",
        image4 : "../../assets/image/Sample_Images/13.jpeg",
      },
      {
        user_name : "James",
        profile_pic : "../../assets/image/Sample_Images/1.jpeg",
        posted_time : "10",
        caption : "Don't be so shy, tell us your true colours!",
        like : "1k",
        comment : "1k",
        image1 : "../../assets/image/Sample_Images/2.jpeg",
        image2 : "../../assets/image/Sample_Images/11.jpeg",
        image3 : "../../assets/image/Sample_Images/12.jpeg",
        image4 : "../../assets/image/Sample_Images/13.jpeg",
      },
      {
        user_name : "James",
        profile_pic : "../../assets/image/Sample_Images/1.jpeg",
        posted_time : "10",
        caption : "Don't be so shy, tell us your true colours!",
        like : "1k",
        comment : "1k",
        image1 : "../../assets/image/Sample_Images/2.jpeg",
        image2 : "../../assets/image/Sample_Images/11.jpeg",
        image3 : "../../assets/image/Sample_Images/12.jpeg",
        image4 : "../../assets/image/Sample_Images/13.jpeg",
      },
    ];
    console.log('LatestBuzz:',this.LatestBuzz);

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

  gotoNext(i: number) {
    console.log('i:',i);
    this.i = 1;
  }

  gotoPrev(i: number) {
    console.log('i:',i);
    this.i = 0;
  }

  gotoBoard(board:any){
    console.log('board:',board);
    console.log('name:',board?.name);
    const P = board?.name;
  }

  addWhatsOnMind() {
    console.log("What's On Mind Clicked");
    this.ShowWhatsOnMind = true;
  }

  addWhatsOnMindHide() {
    console.log("What's On Mind Hide Clicked");
    this.ShowWhatsOnMind = false;
  }

  ToPostWhatsOnMind() {
    console.log('WhatsOnMindText:',this.WhatsOnMindText);
    if (this.WhatsOnMindText !== '' && this.WhatsOnMindText !== undefined) {
      this.WhatsOnMindText = '';
      this.common.showAlertSuccess("Your <strong> What's On Your Mind </strong> posted <strong> Successfully </strong>");
    }
    else {
      console.log("What's On Mind is empty");
      this.common.showAlertFailed("Please enter <strong> What's On Your Mind </strong> and then click <strong> POST </strong>");
    }
  }

}
