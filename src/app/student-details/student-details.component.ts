import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { RoleService } from '../role.service';
import { ListService } from '../service/list.service';
import { User } from '../user1';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  
  user3:User[]=[];
  editnum: number = 0;
  roleName:string='';
  rolePlay:string='';

  constructor(private loginService: LoginService,private route: ActivatedRoute, private router: Router, private roleServer:RoleService) { }

  ngOnInit(): void {
    // this.user3= this.listService.getUsers();
  //   this.roleName=this.roleServer.role;
  //   console.log("Role name: "+this.roleName);
  //   if(this.roleName==='admin'){
  //     this.rolePlay='true';
  //     console.log('true');  
  //   }
  //   else{
  //     this.rolePlay='false';
  //   }
  // }

  this.loginService.getUser().subscribe((res)=>{
    this.user3=res as User[]
  });
  
//   remove(_id: number) {
//     alert("Are you sure to remove details?");
//     this.listService.removeUser(_id);
//     // this.user3 = this.listService.getUsers();
//   }

// }
  }
}
