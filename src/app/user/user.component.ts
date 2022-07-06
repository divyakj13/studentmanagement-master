import { LoginService } from '../login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from '../role.service';
import { User1 } from './user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userLogin = new User1('Divya', 'Divya@13');   // roleList: any = ['Admin','User'];
  roleList: string = '';
  name: string = '';
  password: string = '';
 

 

  constructor(private router: Router, private loginService: LoginService,private roleService:RoleService) { }

  ngOnInit(): void {
    this.roleService.roleValue1=this.roleList;
    this.roleList=this.roleService.role;

  }
  btnClick(){
    this.router.navigate(['/login']);

  }

  handleClick() {
    console.log("handleClick name : "+this.name)
    console.log("handleClick name : "+this.userLogin.name)
  
    if (this.name === this.userLogin.name) {
      if (this.password === this.userLogin.password) {
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
    console.log("user role : "+this.roleList)
    console.log("user name : "+this.name)
    console.log(formData.value);
    console.log(formData.value.role);
    this.roleService.setUserRole=formData.value.role
    
    this.roleService.getRole(this.roleList)

    if (this.roleList == "admin") {
      if (this.handleClick()) {
        console.warn("you are admin");

        this.router.navigate(['/page']);
      }
    }else {

      this.router.navigate(['/page']);
    }

  }



}