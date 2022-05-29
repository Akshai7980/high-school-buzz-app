import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  UserDetails: any = [];

  constructor() { }

  ngOnInit() {
    this.UserDetails = [
      {
        user_name : "Abayomi Axton",
        school : "King Edward High School",
        profile_pic : "../../assets/image/Sample_Images/11.jpeg",
        buzz_created : "380",
        likes : "50K",
        commentators : "1.1M",
        comments : "2.3M",
        standard : "10 B",
        date_of_birth : "20-04-2000",
        email : "abayomi@gmail.com",
        phone : "+91 9897969594",
        password : "***************"
      }
    ];
    console.log('UserDetails:',this.UserDetails);
  }

}
