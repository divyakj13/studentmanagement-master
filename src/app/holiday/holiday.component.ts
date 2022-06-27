import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { User } from '../users';
import { User2 } from '../user2';
import { ListService } from 'src/app/service/list.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {

  userList: User2[] = [];
  editnum: number = 0;
  roleName:string='';
  loginService: any;
  rolePlay:string=''

  constructor(private listService: ListService,private route: ActivatedRoute, private router: Router, private roleServer:RoleService) { }

  ngOnInit(): void {
    this.userList = this.listService.getUsers();
    this.roleName=this.roleServer.role;
    console.log("Role name: "+this.roleName);
    if(this.roleName==='admin'){
      this.rolePlay='true';
      console.log('true');  
    }
    else{
      this.rolePlay='false';
    }
  }

  
  remove(id: number) {
    alert("Are you sure to remove details?");
    this.listService.removeUser(id);
    this.userList = this.listService.getUsers();
  }

}

