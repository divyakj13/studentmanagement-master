import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['/page'])
  }
  
}
