import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { User } from './shared/user.service';
import { appRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule , FormsModule , HttpClientModule, appRoutingModule, NgbModule
    
  ],
  providers: [User],
  bootstrap: [AppComponent]
})
export class AppModule { }
