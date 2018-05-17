import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {

    this.questions = this.questionsService.getQuestions(this);
    this.questionAnswered(0);
    this.index=0;

  }

  public question: string;
  public option1: string;
  public option2: string;
  public option3: string;
  public option4: string;

  public questions;
  public index = 0;

  //NgStyle
  questionAnswered(answer: number) {
      this.index++;
      //console.log(this.index);
      //if(this.index == 0) {
      this.question = this.questions[this.index].question;
      this.option1 = this.questions[this.index].option1;
      this.option2 = this.questions[this.index].option2;
      this.option3 = this.questions[this.index].option3;
      this.option4 = this.questions[this.index].option4;
      }
  }
