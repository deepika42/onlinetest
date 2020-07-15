import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
@Injectable()
export class User{

    addUserToDB(data:any){
        console.log("User added to database" , data)
    
    this.http.post('https://online-test-ae107.firebaseio.com/users.json', data).subscribe(
            response =>{
            console.log(response)
            this.router.navigate(['/login'])
        });
    }

    public loadUser() : Observable<any[]>{

        const url = 'https://online-test-ae107.firebaseio.com/users.json';
        return this.http.get<any[]>(url);
    }

    public loadQuestions() : Observable<any[]>{

        const url = 'https://online-test-ae107.firebaseio.com/questionlist.json';
        return this.http.get<any[]>(url);
    }

    constructor(private http:HttpClient , private router: Router){
    }

}