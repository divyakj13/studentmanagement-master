import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../service/list.service';
import { User2 } from '../user2';
@Component({
  selector: 'app-update-holiday',
  templateUrl: './update-holiday.component.html',
  styleUrls: ['./update-holiday.component.scss']
})
export class UpdateHolidayComponent  implements OnInit {
  userList: User2 = {
    id: 0,
    // name: '',
    // email: '',
    // mobile: '',
    // topic: '',
    // gender: ''
    date :'',
    descrip :'',

  }
    ;

  constructor(private service: ListService, private router: Router, private route: ActivatedRoute,) {
  }

  id: number = 0;
  topics = ['Angular', 'PHP', 'React']
  ngOnInit(): void {

    this.route.params.subscribe((params: { [x: string]: number; }) => {
      this.id = params['id'];
      if (this.id != null) {
        this.userList.id = (params['id']);
        const data = this.service.getUsersByID(this.id);
        if (data) {
          this.userList = (data);
        }
      }
    });
  }


  tableDisplay() {
    if (this.userList.id === 0) {
      //Create New User
      console.log("id : " + this.userList.id);
      this.service.setUser(this.userList);
      alert("Details are added Successfully")
    } 
    else {
      //Update User info
      this.service.updateUser(this.userList);
      alert("Details are Updated Successfully")
    }
    this.router.navigate(['/holiday']);
  }
  backButton() {
    this.router.navigate(['/holiday']);
  }

  success() {

  }

}
