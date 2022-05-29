import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contest-view',
  templateUrl: './contest-view.page.html',
  styleUrls: ['./contest-view.page.scss'],
})
export class ContestViewPage implements OnInit {
  ContestDetails: any = [];

  constructor() { }

  ngOnInit() {
    this.ContestDetails = [
      {
        img : '../../assets/image/Sample_Images/1.jpeg',
      },
      {
        img : '../../assets/image/Sample_Images/2.jpeg',
      },
      {
        img : '../../assets/image/Sample_Images/3.jpeg',
      },
      {
        img : '../../assets/image/Sample_Images/4.jpeg',
      },
      {
        img : '../../assets/image/Sample_Images/5.jpeg',
      },
      {
        img : '../../assets/image/Sample_Images/6.jpeg',
      },
      {
        img : '../../assets/image/Sample_Images/7.jpeg',
      },
      {
        img : '../../assets/image/Sample_Images/8.jpeg',
      },
      {
        img : '../../assets/image/Sample_Images/9.jpeg',
      },
            {
        img : '../../assets/image/Sample_Images/10.jpeg',
      },
      {
        img : '../../assets/image/Sample_Images/11.jpeg',
      },
      {
        img : '../../assets/image/Sample_Images/12.jpeg',
      },
    ];
    console.log('ContestDetails:',this.ContestDetails);
  }

}
