import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { User } from '../shared/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  addUser(nf:NgForm){
    console.log("User added")
    this.ud.addUserToDB(nf.value)
    // console.log(nf.value.uname)

  }
  constructor(private ud:User) { }

  ngOnInit(): void {
  }

}
