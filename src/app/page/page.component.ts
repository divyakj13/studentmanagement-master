import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../service/app-service.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  title = 'studentmanagement';

  constructor(private service:AppServiceService){

  }

  ngOnInit() {
  }
  
  logout(){
    localStorage.removeItem('token')
  }
}
  