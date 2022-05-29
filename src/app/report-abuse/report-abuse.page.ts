import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-abuse',
  templateUrl: './report-abuse.page.html',
  styleUrls: ['./report-abuse.page.scss'],
})
export class ReportAbusePage implements OnInit {

  ReportAbuse:any = [];

  constructor() { }

  ngOnInit() {
        this.ReportAbuse = [
      {
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
      }
    ]
  }

}
