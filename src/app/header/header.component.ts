import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private person: LoginService) { }

  name: string = ''
  
  ngOnInit(): void {
    this.name = this.person.name;
  }

  logout() {
    localStorage.removeItem('token')
  }

}
