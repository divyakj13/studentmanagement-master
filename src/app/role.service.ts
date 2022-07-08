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
  getdata() {
    const data = this.getRole(this.roleValue1)
    this.role = this.data;
  }

  set setUserRole(val: string) {
    this.roleVal = val;
    console.log(this.roleVal);

  }
  get getUserRole() {
    return this.roleVal;

  }

  getDetails(regNum: string, password: string,role:string) {
    this.regNum = regNum;
    this.password = password;
    console.log("get......");
    console.log(this.regNum);
    console.log(this.password);

    return this.http.get(this.baseUrl + `/${regNum}` + `/${password}`+`/${role}`);




  }


}



