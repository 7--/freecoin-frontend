import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-select-quiz',
  templateUrl: './select-quiz.component.html',
  styleUrls: ['./select-quiz.component.css']
})
export class SelectQuizComponent implements OnInit {

  constructor(private quizService: QuizService, private questionsService: QuestionsService, private router: Router) { }

  ngOnInit() {
    //this.quizService.s
  }

  select(id:number){
      this.questionsService.setQuiz(id);

  }

}
