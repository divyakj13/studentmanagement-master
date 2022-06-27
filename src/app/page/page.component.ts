import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
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
    this.getDataFromAPI();
  }
  getDataFromAPI(){
    this.service.getData().subscribe((response)=>{
      console.log('Response from API is ',response)
    },(error)=>{
      console.log('Error is ',error);
    })
  }
}
  