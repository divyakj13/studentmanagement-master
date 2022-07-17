import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { User } from '../user1';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user3: User={
    _id: '',
    username: '',
    email: '',
    phone: '',
    gender: '',
    regNum: '',
    password: '',
    Confirmpassword: ''
  }

  userModel = new User();
  _id: number = 0;
  passwordValue: string='';
  ConfirmpasswordValue: string='';
  constructor(private router:Router,private login:LoginService,private route: ActivatedRoute,private formsmodule:FormsModule,private httpclient:HttpClient){}
  ngOnInit(){
  }

  conform(){
    if(this.passwordValue===this.ConfirmpasswordValue){
      return true;
    }
    else{
  
      return false;
    }

  }

  userdata(userForm:NgForm)
  {
    this.login.getDetails(userForm.value).subscribe((res)=>{
    })

  this.router.navigate(['/']);
  }}
