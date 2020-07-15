import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  flag=false
  checkUser(nf:NgForm){
    this.ud.loadUser().subscribe(response =>{
      for(let u in response){
        // console.log(response[u].pass)
        if(nf.value.uemail == response[u].uemail && nf.value.pass == response[u].pass){
          console.log("User logged in")
          this.router.navigate(['/quiz'])
          this.flag=true
          break
        }
      }
      if(this.flag==false){
        console.log("Invalid email or password")
        this.router.navigate(['/login'])
      }
    })

  }

  constructor(private ud:User , private router: Router) { }

  ngOnInit(): void {
  }

}
