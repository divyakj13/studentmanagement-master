import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user1';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // title = 'tdfForm';
  // topics =['angular','react','php'];
  userModel = new User();
  id: number = 0;
  constructor(private router:Router,private login:LoginService,private route: ActivatedRoute){}
  ngOnInit(){
    let data = localStorage.getItem(this.userModel.username);
    console.log(" ans "+this.userModel.username);
    console.log(" data :"+data);
    console.log("Id : "+this.userModel.id);
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.userModel.id=(params['id']);
        const data = this.login.getUsersByID(this.id);
        if (data) {
          this.userModel=(data);
        }
      }
    });
  }
  userdata()
  {
    this.router.navigate(['/']);
    this.login.setMessage(this.userModel);
    localStorage.setItem(this.userModel.username, JSON.stringify(this.userModel));
    if (this.userModel.id === 0) {
      //Create New User
      console.log("id : "+this.userModel.id)
      this.login.setMessage(this.userModel);
    } else {
      //Update User info
      this.login.updateUser(this.userModel);
  }
  this.router.navigate(['/']);
  }}
