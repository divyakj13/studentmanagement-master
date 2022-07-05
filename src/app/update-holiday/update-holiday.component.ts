import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    _id: '',
    date :'',
    descrip :'',
  }

  constructor(private service: ListService, private router: Router, private route: ActivatedRoute,) {

  }

  _id: string ='';
  ngOnInit(): void {

    // this.route.params.subscribe((params: { [x: string]: number; }) => {
    //   this.id = params['id'];
    //   if (this.id != null) {
    //     this.userList.id = (params['id']);
    //     const data = this.service.getUsersByID(this.id);
    //     if (data) {
    //       this.userList = (data);
    //     }
    //   }
    // });

    this.route.params.subscribe(params => {
      this._id=params['_id']
      
      console.log("route _id : "+this._id);        
    });
  }


  tableDisplay(userForm:NgForm) {
    // if (this.userList.id === 0) {
    //   //Create New User
    //   console.log("id : " + this.userList.id);
    //   this.service.setUser(this.userList);
    //   alert("Details are added Successfully")
    // } 
    // else {
    //   //Update User info
    //   this.service.updateUser(this.userList);
    //   alert("Details are Updated Successfully")
    // }
    if (!this._id) {
      //Create New User
      console.log("post id : "+this._id);
      
      this.service.postHoliday(userForm.value).subscribe((data)=>{
        console.log(data);
      })
      // console.log("id : " + this.list._id);
      // console.log(this.list);
      alert("Details are added Successfully")
    } 
    else {
      //Update User info
      // this.formData(eventForm);
      console.log("put id"+this._id);

      this.service.putHoliday(userForm.value,this._id).subscribe((res)=>{
        console.log("update event info");
      })
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
