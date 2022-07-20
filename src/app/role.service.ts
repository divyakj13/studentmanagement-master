import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
  roleVal: string = ''
  role: string = ''
  roleValue1: string = ''
  data: string = '';
  regNum: string = '';
  password: string = '';

  readonly baseUrl = "http://localhost:3000/login";

  getRole(roleValue: string) {
    this.role = roleValue
  }
  set setUserRole(val: string) {
    this.roleVal = val;
  }

  getDetails(regNum: string, password: string,role:string) {
    this.regNum = regNum;
    this.password = password;
    this.role=role;
    return this.http.get(this.baseUrl + `/${regNum}` + `/${password}`+`/${role}`);

  }


}



