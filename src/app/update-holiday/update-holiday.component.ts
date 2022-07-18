import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../service/list.service';
import { User2 } from '../user2';
@Component({
  selector: 'app-update-holiday',
  templateUrl: './update-holiday.component.html',
  styleUrls: ['./update-holiday.component.scss']
})
export class UpdateHolidayComponent implements OnInit {
  userList: User2 = {
    date: '',
    descrip: '',
    _id: ''
  }

  locale = 'en-US'

  constructor(private service: ListService, private router: Router, private route: ActivatedRoute,) {

  }
  @ViewChild("userForm") userForm!: NgForm;
  _id: string = '';

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this._id = params['_id']
    });

    if(this._id.length==24){
      this.service.getLeave(this._id).subscribe(
        (res: any) => this.editHoliday(res),
        (err: any) => alert(JSON.stringify(err))
      )
    }
  }

  editHoliday(res: User2) {
    this.userForm.setValue({
      date: formatDate(res.date, 'YYYY-MM-dd', this.locale),
      descrip: res.descrip
    })
  }

  tableDisplay(userForm: NgForm) {
    if (!this._id) {
      //Create New User
      this.service.postHoliday(userForm.value).subscribe((data) => {
      })
      alert("Details are added Successfully")
    }
    else {
      this.service.putHoliday(userForm.value, this._id).subscribe((res) => {
      })
      alert("Details are Updated Successfully")
    }
    this.router.navigate(['/holiday']);
  }
  backButton() {
    this.router.navigate(['/holiday']);
  }

}
