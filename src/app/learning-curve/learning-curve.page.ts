import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-curve',
  templateUrl: './learning-curve.page.html',
  styleUrls: ['./learning-curve.page.scss'],
})
export class LearningCurvePage implements OnInit {

  LearningCurveCard: any = [];

  constructor() { }

  ngOnInit() {
    this.LearningCurveCard = [
      {
        question : "How do you respond to complex text or digital media?",
        answers_count : "8",
        asked_user : "James",
        profile_pic : "../../assets/image/Sample_Images/11.jpeg",
        school : "St.Joseph School",
        time_ago : "1 day ago",
      },
      {
        question : "How do you respond to complex text or digital media?",
        answers_count : "8",
        asked_user : "James",
        profile_pic : "../../assets/image/Sample_Images/11.jpeg",
        school : "St.Joseph School",
        time_ago : "1 day ago",
      },
      {
        question : "How do you respond to complex text or digital media?",
        answers_count : "8",
        asked_user : "James",
        profile_pic : "../../assets/image/Sample_Images/11.jpeg",
        school : "St.Joseph School",
        time_ago : "1 day ago",
      },
    ];
    console.log('LearningCurveCard:',this.LearningCurveCard);
  }

}
