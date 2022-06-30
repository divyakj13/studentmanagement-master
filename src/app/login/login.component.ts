import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user1';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userModel = new User();
  _id: number = 0;
  passwordValue: string='';
  ConfirmpasswordValue: string='';
  constructor(private router:Router,private login:LoginService,private route: ActivatedRoute){}
  ngOnInit(){
    let data = localStorage.getItem(this.userModel.username);
    console.log(" ans "+this.userModel.username);
    console.log(" data :"+data);
    console.log("Id : "+this.userModel._id);
    this.route.params.subscribe(params => {
      this._id = params['_id'];
      if (this._id != null) {
        this.userModel._id=(params['_id']);
        const data = this.login.getUsersByID(this._id);
        if (data) {
          this.userModel=(data);
        }
      }
    });
  }

  conform(){
    if(this.passwordValue===this.ConfirmpasswordValue){
      console.log(this.passwordValue);
      console.log(this.ConfirmpasswordValue);
      return true;
    }
    else{
      console.log(this.passwordValue);
      console.log(this.ConfirmpasswordValue);
      return false;
    }

  }

  
  userdata(userForm:NgForm)
  {
    this.login.getDetails(userForm.value).subscribe((res)=>{
      console.log("res register : "+res.toString());
    })


    this.router.navigate(['/']);
    this.login.setMessage(this.userModel);
    localStorage.setItem(this.userModel.username, JSON.stringify(this.userModel));
    if (this.userModel._id === 0) {
      //Create New User
      console.log("id : "+this.userModel._id)
      this.login.setMessage(this.userModel);
    } else {
      //Update User info
      this.login.updateUser(this.userModel);
  }
  this.router.navigate(['/']);
  }}

  

  