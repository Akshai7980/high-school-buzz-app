import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-group-list',
  templateUrl: './study-group-list.page.html',
  styleUrls: ['./study-group-list.page.scss'],
})
export class StudyGroupListPage implements OnInit {

  StudyGroups:any = [];
  colors:any = [];
  GroupIcons:any = [];
  GroupMembers: any = [];

  constructor() { }

  ngOnInit() {
    this.StudyGroups = [
      {
        group_name : "Physics",
        group_members_count : "5",
        message_count : "1"
      },
      {
        group_name : "Chemistry",
        group_members_count : "6",
        message_count : "2"
      },
      {
        group_name : "Geometry",
        group_members_count : "7",
        message_count : "3"
      },
      {
        group_name : "Physics",
        group_members_count : "5",
        message_count : "1"
      },
      {
        group_name : "Chemistry",
        group_members_count : "6",
        message_count : "2"
      },
      {
        group_name : "Geometry",
        group_members_count : "7",
        message_count : "3"
      },
    ];
    console.log('StudyGroups:',this.StudyGroups);

    this.colors = [ ['#E4E6FD'] , ['#FCF2D7'] , ['#D4F9D8'] ];
    console.log('Colors:',this.colors);

    this.GroupIcons = [ 
      ['../../assets/image/study-grp-ic.png'] ,
      ['../../assets/image/study-grp-ic1.png'] ,
      ['../../assets/image/study-grp-ic2.png'] 
      ];
    console.log('GroupIcons:',this.GroupIcons);

    this.GroupMembers = [
      ["../../assets/image/study-grp-mem.png"] ,
      ["../../assets/image/study-grp-mem1.png"] ,
      ["../../assets/image/study-grp-mem2.png"]
    ];
    console.log('GroupMembers:',this.GroupMembers);

  }

  openStudyChat(s) {
    console.log('s:',s);
  }

}
