import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { RoleService } from '../role.service';
import { User } from '../user1';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  
  user3:User[]=[];
  roleName:string |null='';
  rolePlay:string='';

  constructor(private loginService: LoginService,private route: ActivatedRoute, private router: Router, private roleServer:RoleService) { }

  ngOnInit(): void {

    this.roleName=localStorage.getItem('role')
    if(this.roleName==='admin'){
      this.rolePlay='true';
    }
    else{
      this.rolePlay='false';
    }
  

  this.loginService.getUser().subscribe((res)=>{
    this.user3=res as User[]
  });
}
  

delete(_id:string){
  if (confirm('Are you sure to delete this record ?') == true) {
    this.loginService.deleteUser(_id).subscribe((res) => {
    });
    this.loginService.getUser().subscribe((res)=>{
      this.user3=res as User[]
    });
  }
  }

  back(){
    this.router.navigate(['/page']);
  }
}
  
