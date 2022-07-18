import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  roleName: string | null = '';
  rolePlay: string = ''
  date:string=''

  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router, private roleServer: RoleService) { }

  ngOnInit(): void {


    this.roleName = localStorage.getItem('role')
    console.log("Role name: " + this.roleName);
    if (this.roleName === 'admin') {
      this.rolePlay = 'true';
    }
    else {
      this.rolePlay = 'false';
    }

    this.listService.getholiday().subscribe((res) => {
      console.log(res);
      this.date=Object.values(res)[1]
      
      this.userList = res as User2[]

    });
  }

  back() {
    this.router.navigate(['/page'])
  }

  delete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.listService.deleteHoliday(_id).subscribe((res) => {
      });
      this.listService.getholiday().subscribe((res) => {
        this.userList = res as User2[]
      });
    }
  }

}
