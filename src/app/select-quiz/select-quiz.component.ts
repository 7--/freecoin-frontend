import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { QuestionComponent} from '../question/question.component';

@Component({
  selector: 'app-select-quiz',
  templateUrl: './select-quiz.component.html',
  styleUrls: ['./select-quiz.component.css']
})
export class SelectQuizComponent implements OnInit {
  public name1: string;

  constructor(private quizService: QuizService, private questionsService: QuestionsService, private router: Router,
  public qc: QuestionComponent) {
  }

  ngOnInit() {
  }

  select(id:number){
    this.qc.show=1;
    this.questionsService.setQuiz(id);

  }

}
