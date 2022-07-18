import { LoginService } from '../service/login.service';
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
  userLogin = new User1('Divya', 'Divya@13'); 
  roleList: string = '';
  password: string = '';
  regNumber: string = '';
  message!:string;
  token!:string;
 
  constructor(private router: Router, private loginService: LoginService,private roleService:RoleService) { }
  ngOnInit(): void {
    this.roleService.roleValue1=this.roleList;
    this.roleList=this.roleService.role;    
  }
  btnClick(){
    this.router.navigate(['/login']);
  }


  display(formData: NgForm) {
    this.loginService.getname(formData.value.regNum)
    this.roleService.getDetails(this.regNumber,this.password,this.roleList).subscribe((res)=>{

      
      this.token = Object.values(res)[0]
      this.message = Object.values(res)[1]
      if(this.message === "true"){
        localStorage.setItem('token',this.token);
        this.router.navigate(['/page'])
      }
      else{
        this.router.navigate(['/'])
      }
     })

    this.roleService.setUserRole=formData.value.role
    localStorage.setItem('role',this.roleList)
    this.roleService.getRole(this.roleList)

    }
}