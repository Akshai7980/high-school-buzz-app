/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-group-chat',
  templateUrl: './study-group-chat.page.html',
  styleUrls: ['./study-group-chat.page.scss'],
})
export class StudyGroupChatPage implements OnInit {
  GroupChat: any = [];

  constructor() { }

  ngOnInit() {
    this.GroupChat = [
      {
        profile_pic : "../../assets/image/Sample_Images/1.jpeg",
        user_name : "Elizabeth"
      },
      {
        profile_pic : "../../assets/image/Sample_Images/2.jpeg",
        user_name : "Elizabeth"
      },
      {
        profile_pic : "../../assets/image/Sample_Images/3.jpeg",
        user_name : "Elizabeth"
      },
      {
        profile_pic : "../../assets/image/Sample_Images/4.jpeg",
        user_name : "Elizabeth"
      },
      {
        profile_pic : "../../assets/image/Sample_Images/5.jpeg",
        user_name : "Elizabeth"
      },
      {
        profile_pic : "../../assets/image/Sample_Images/6.jpeg",
        user_name : "Elizabeth"
      },
      {
        profile_pic : "../../assets/image/Sample_Images/7.jpeg",
        user_name : "Elizabeth"
      },
      {
        profile_pic : "../../assets/image/Sample_Images/8.jpeg",
        user_name : "Elizabeth"
      },
      {
        profile_pic : "../../assets/image/Sample_Images/9.jpeg",
        user_name : "Elizabeth"
      },
      {
        profile_pic : "../../assets/image/Sample_Images/10.jpeg",
        user_name : "Elizabeth"
      },
      {
        profile_pic : "../../assets/image/Sample_Images/12.jpeg",
        user_name : "Elizabeth"
      },
    ];
    console.log('GroupChat:',this.GroupChat);
  }

  toViewUser(g, i) {
    console.log('GroupChat:',g, i);
  }

}
