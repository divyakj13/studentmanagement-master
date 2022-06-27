import { LoginService } from '../login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from '../role.service';
import { User1 } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userLogin = new User1('Divya', 'Divya@13');
  // roleList: any = ['Admin','User'];
  roleList: any = ['Admin'];
  username: string = '';
  psw: string = '';
  // userform: FormGroup;

 


  constructor(private router: Router, private loginService: LoginService,private roleService:RoleService) { }
  role: string = '';

  ngOnInit(): void {
    this.role=this.roleService.role;


    this.roleService.roleValue1=this.role;

  }
  btnClick(){
    this.router.navigate(['/login']);

  }

  handleClick() {
    console.log(this.username)
    console.log(this.userLogin.username)
    

    if (this.username === this.userLogin.username) {
      if (this.psw === this.userLogin.password) {
        return true
      }
      else {
        alert("check password")
        return false
      }
    }
    else {
      alert("user not found")
      return false
    }
  }


  display(formData: NgForm) {
    console.log("user role : "+this.role)
    console.log("user username : "+this.username)
    console.log(formData.value);
    this.roleService.getRole(this.role)

    if (this.role == "admin") {
      if (this.handleClick()) {
        console.warn("you are admin");

        this.router.navigate(['/page']);
      }
    }else {

      this.router.navigate(['/page']);
    }

  }
}