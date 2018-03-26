import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class LeaderService {

  constructor(private http: HttpClient) { }

  getLeaders(): Observable<any> {
      //return [new Leaders('John',1000), new Leaders('Jim',900)];
      return this.http.get(environment.endpoint+'users');
  }
}
export class Leaders {
  //public showLeaders()
  public name: string;
  public score: number;


  constructor(s: string, n: number) {
      this.name=s;
      this.score=n;
  }

  }
