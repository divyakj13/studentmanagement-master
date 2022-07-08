import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SidenavbarComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
  }

 
}


