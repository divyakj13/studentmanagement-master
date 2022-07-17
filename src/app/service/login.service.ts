import { Injectable } from '@angular/core';
import { User } from '../user1';
import { User1 } from '../user/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  per: string;
  userLogin = new User1(' ', ' ');
  public userList: User[] = [{
    _id: '',
    username: '',
    email: '',
    gender: '',
    phone: '',
    regNum: '',
    password: '',
    Confirmpassword: '',

  }];

  user: User1[] = [];
  user1!: User;
  readonly baseUrl = 'http://localhost:3000/student';
  id1: number = 0;
  Role: string = '';
  name: string = ''

  constructor(private http: HttpClient) { }

  setPerson(username: string) {
    this.per = username
  }
  getPerson() {
    return this.per
  }

  getname(name: string) {
    this.name = name;
    console.log(name);
    return name
  }

  getDetails(userForm: User) {
    return this.http.post(this.baseUrl, userForm)
  }

  getRole(role: string) {
    this.Role = role;
  }
  updateUser(user: User) {
    const userIndex = this.userList.findIndex(x => x._id == user._id);
    this.userList[userIndex] = user;
  }

  public getUser() {
    return this.http.get(this.baseUrl);
  }
  public postUser(newUser: User) {
    return this.http.post(this.baseUrl, newUser);
  }
  public putUser(newUser: User) {
    return this.http.put(this.baseUrl + `/${newUser._id}`, newUser)
  }
  public deleteUser(_id: string) {
    return this.http.delete(this.baseUrl + `/${_id}`)
  }



  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token')
  }

}

