import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tell-me-a-secrete-view',
  templateUrl: './tell-me-a-secrete-view.page.html',
  styleUrls: ['./tell-me-a-secrete-view.page.scss'],
})
export class TellMeASecreteViewPage implements OnInit {
  OthersSecrete:any = [];

  constructor() { }

  ngOnInit() {
    this.OthersSecrete = [
      {
        img : '../../assets/image/Sample_Images/1.jpeg',
        name : 'Victor Daniel',
        school : 'Michel School',
        like_count : '1.k',
        comment_count : '2k',
      },
      {
        img : '../../assets/image/Sample_Images/2.jpeg',
        name : 'Victor Daniel',
        school : 'Michel School',
        like_count : '1.k',
        comment_count : '2k',
      },
      {
        img : '../../assets/image/Sample_Images/3.jpeg',
        name : 'Victor Daniel',
        school : 'Michel School',
        like_count : '1.k',
        comment_count : '2k',
      },
      {
        img : '../../assets/image/Sample_Images/4.jpeg',
        name : 'Victor Daniel',
        school : 'Michel School',
        like_count : '1.k',
        comment_count : '2k',
      },
      {
        img : '../../assets/image/Sample_Images/5.jpeg',
        name : 'Victor Daniel',
        school : 'Michel School',
        like_count : '1.k',
        comment_count : '2k',
      },
      {
        img : '../../assets/image/Sample_Images/6.jpeg',
        name : 'Victor Daniel',
        school : 'Michel School',
        like_count : '1.k',
        comment_count : '2k',
      },
      {
        img : '../../assets/image/Sample_Images/7.jpeg',
        name : 'Victor Daniel',
        school : 'Michel School',
        like_count : '1.k',
        comment_count : '2k',
      },
      {
        img : '../../assets/image/Sample_Images/8.jpeg',
        name : 'Victor Daniel',
        school : 'Michel School',
        like_count : '1.k',
        comment_count : '2k',
      },
      {
        img : '../../assets/image/Sample_Images/9.jpeg',
        name : 'Victor Daniel',
        school : 'Michel School',
        like_count : '1.k',
        comment_count : '2k',
      },
      {
        img : '../../assets/image/Sample_Images/10.jpeg',
        name : 'Victor Daniel',
        school : 'Michel School',
        like_count : '1.k',
        comment_count : '2k',
      },

    ];
    console.log('OthersSecrete:',this.OthersSecrete);
  }

}
