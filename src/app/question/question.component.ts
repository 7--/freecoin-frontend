import {Component, OnInit} from '@angular/core';
import {QuestionsService} from '../questions.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {UserService} from '../user.service'

@Component({selector: 'app-question', templateUrl: './question.component.html', styleUrls: ['./question.component.css']})
export class QuestionComponent implements OnInit {

  constructor(private questionsService : QuestionsService, private userService : UserService) {}
  public show = 1;
  ngOnInit() {

    this.show = 1;
    this.index = 0;
    this
      .questionsService
      .setQuestions();
    this
      .questionsService
      .getQuestions(this)
      .subscribe(res => {
        this.questions = res;
        this.questionAnswered(0);
      });
  }

  public question : string;
  public option1 : string;
  public option2 : string;
  public option3 : string;
  public option4 : string;

  public questions;
  public index;

  update() {
    console.log("update");
    this.index = 0;
    this
      .questionsService
      .getQuestions(this)
      .subscribe(res => {
        console.log(res);
        this.questions = res;
        console.log(this.questions);
        this.questionAnswered(0);
      });
  }

  questionAnswered(answer : number) {
    if (answer != 0) {
      if (answer == this.questions[this.index].answer) {
        this
          .userService
          .correct();
        console.log("Correct");
      } else {
        this
          .userService
          .incorrect();
        console.log("Incorrect");
      }
      this.index++;
    }
    if (this.index < this.questions.length) {
      this.question = this.questions[this.index].question;
      this.option1 = this.questions[this.index].choice1;
      this.option2 = this.questions[this.index].choice2;
      this.option3 = this.questions[this.index].choice3;
      this.option4 = this.questions[this.index].choice4;
    } else {
      this.show = 0;
      this
        .userService
        .updateUser();
    }
  }

}
