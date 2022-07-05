import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/user']);

  }

  Register(){
    this.router.navigate(['/login']);
  }

}
