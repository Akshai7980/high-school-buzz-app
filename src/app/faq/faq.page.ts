import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  Questions: any = [];
  showAnswer: {[key: number]: boolean} = {};

  constructor(
    private common: CommonService,
  ) { }

  ngOnInit() {
    this.Questions = [
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
            {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
      {
        question: "How Save PNG to Camera roll, save template?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
    ]
    this.showAnswer = {} = {};
    console.log('Questions:',this.Questions);
  }

  gotoSections(category:any) {
    console.log('cat:',category);
    this.showAnswer = {} = {};
  }

  ToViewAnswer(q, i) {
    console.log('Questions:', q, i);
    this.showAnswer = {} = {};
    this.showAnswer[i] = !this.showAnswer[i];
  }

}


