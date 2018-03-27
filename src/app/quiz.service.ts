import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class QuizService {

    constructor(private http : HttpClient) {}
    public quiz : number = 1;
    public observe : Observable < any >;
    public quizComponent;

    getQuizes(obj) : Observable < any > {
      this.quizComponent = obj;
      return this.observe
  }

  setQuizes() {
    this.observe = this
      .http
      .get(environment.endpoint + `quiz`);
  }

  setQuiz(quizNo : number) {
    this.quiz = quizNo;
    this.setQuizes();
    this
      .quizComponent
      .update();
    console.log(this.quiz);
    console.log(environment.envName);

  }

}

export class Quiz {
  name : string;
  id : number;
  constructor(name : string, id : number) {
    this.name = name;
    this.id = id;
  }
}
