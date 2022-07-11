import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppServiceService } from './service/app-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'studentmanagement';

  constructor(private service:AppServiceService,public router:Router){

  }

  ngOnInit() {
    // this.getDataFromAPI();
  }
  // getDataFromAPI(){
  //   this.service.getData().subscribe((response)=>{
  //     console.log('Response from API is ',response)
  //   },(error)=>{
  //     console.log('Error is ',error);
  //   })
  }

  