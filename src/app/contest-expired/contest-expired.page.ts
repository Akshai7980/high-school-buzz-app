import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contest-expired',
  templateUrl: './contest-expired.page.html',
  styleUrls: ['./contest-expired.page.scss'],
})
export class ContestExpiredPage implements OnInit {

  ContestDetails:any = [];
  TopPlayers:any = [];
  Winner:any = [];

  constructor() { }

  ngOnInit() {

    this.ContestDetails = [
      {
        user_name : "Kyle Hoffman",
        profile_pic : "../../assets/image/Sample_Images/11.jpeg",
        school : "St.Joseph School",
        end_date : "Expired",
        contest_caption : "Vestibulum ateleifend diam",
        contest_description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
        votes_count : "10k",
        participants_count : "5k",
        contest_status : "Expired"
      }
    ];
    console.log('ContestDetails:',this.ContestDetails);

    this.Winner = [
      {
        user_name : "Andriya James",
        profile_pic : "../../assets/image/Sample_Images/11.jpeg",
        school : "St.Joseph School",
        votes : "800",
        comments : "4.5k",
      }
    ];
    console.log('Winner:',this.Winner);

    this.TopPlayers = [
      {
        user_name : "Kyle Hoffman",
        profile_pic : "../../assets/image/Sample_Images/11.jpeg",
        school : "St.Joseph School",
        comments : "2k",
        votes : "800"
      },
      {
        user_name : "Kyle Hoffman",
        profile_pic : "../../assets/image/Sample_Images/11.jpeg",
        school : "St.Joseph School",
        comments : "2k",
        votes : "800"
      },
      {
        user_name : "Kyle Hoffman",
        profile_pic : "../../assets/image/Sample_Images/11.jpeg",
        school : "St.Joseph School",
        comments : "2k",
        votes : "800"
      },
      {
        user_name : "Kyle Hoffman",
        profile_pic : "../../assets/image/Sample_Images/11.jpeg",
        school : "St.Joseph School",
        comments : "2k",
        votes : "800"
      },
      {
        user_name : "Kyle Hoffman",
        profile_pic : "../../assets/image/Sample_Images/11.jpeg",
        school : "St.Joseph School",
        comments : "2k",
        votes : "800"
      }
    ];
    console.log('TopPlayers:',this.TopPlayers);

  }

}
