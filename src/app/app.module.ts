import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { SelectQuizComponent } from './select-quiz/select-quiz.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsService } from './questions.service';
import { LeaderService } from './leader.service';
import { UserService } from './user.service';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { QuizService } from './quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LeaderboardComponent,
    MainComponent,
    AccountComponent,
    LoginComponent,
    SelectQuizComponent,
    QuestionComponent,
    RegisterComponent,
    AboutComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'quizzes', component: SelectQuizComponent},
      {path: 'quiz', component: QuizComponent},
      {path: 'about', component: AboutComponent}
    ])
  ],
  providers: [QuestionsService, LeaderService, UserService, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
