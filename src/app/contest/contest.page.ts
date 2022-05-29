import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.page.html',
  styleUrls: ['./contest.page.scss'],
})
export class ContestPage implements OnInit {

  ContestDetails:any = [];

  constructor() { }

  ngOnInit() {
    this.ContestDetails = [
      {
        contest_name : "Vestibulum ateleifend diam",
        votes : "10k",
        contest_status : "Ongoing",
        date : "20 MAY 2021",
        progress : 10,
      },
      {
        contest_name : "Vestibulum ateleifend diam",
        votes : "10k",
        contest_status : "Expired",
        date : "20 MAY 2021",
        progress : 20,
      },
      {
        contest_name : "Vestibulum ateleifend diam",
        votes : "10k",
        contest_status : "Expired",
        date : "20 MAY 2021",
        progress : 30,
      },
      {
        contest_name : "Vestibulum ateleifend diam",
        votes : "10k",
        contest_status : "Ongoing",
        date : "20 MAY 2021",
        progress : 40,
      },
      {
        contest_name : "Vestibulum ateleifend diam",
        votes : "10k",
        contest_status : "Expired",
        date : "20 MAY 2021",
        progress : 50,
      },
      {
        contest_name : "Vestibulum ateleifend diam",
        votes : "10k",
        contest_status : "Expired",
        date : "20 MAY 2021",
        progress : 60,
      },
      {
        contest_name : "Vestibulum ateleifend diam",
        votes : "10k",
        contest_status : "Expired",
        date : "20 MAY 2021",
        progress : 70,
      },
      {
        contest_name : "Vestibulum ateleifend diam",
        votes : "10k",
        contest_status : "Expired",
        date : "20 MAY 2021",
        progress : 80,
      },
      {
        contest_name : "Vestibulum ateleifend diam",
        votes : "10k",
        contest_status : "Expired",
        date : "20 MAY 2021",
        progress : 90,
      },
      {
        contest_name : "Vestibulum ateleifend diam",
        votes : "10k",
        contest_status : "Expired",
        date : "20 MAY 2021",
        progress : 100,
      }
      
    ];
    console.log('ContestDetails:',this.ContestDetails);
  }

}
