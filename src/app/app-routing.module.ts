import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component'

const routes: Routes = [
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'quiz', component: QuizComponent },

];

export const appRoutingModule = RouterModule.forRoot(routes);