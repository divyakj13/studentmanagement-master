import { Injectable } from '@angular/core';
import { User } from './user1';
import { User1 } from './user/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLogin=new User1(' ',' ');
  public userList: User[] = [{
    id:1,
    username: 'Tharani',
    email: 'tharani@gmail.com',
    gender: 'female',
    phone: 9360506366,
    regNum:"ACE1111",
    password:"divya@123"
}];
id1:number=0;
Role:string='';
  constructor() { }
  setMessage(user: User){
    user.id = this.userList.length+1;
    this.userList.push(user);

  }
  getUsersByName(name : String){
    this.userList = this.userList.filter(x => x.username != name);
  }
  getUsers(){
    return this.userList
  }
  getUsersByID(id: number){
    return this.userList.find(x => x.id == id)
  }
  removeUser(name : String) {
    this.userList = this.userList.filter(x => x.username != name);
}
  loggedIn(){
    return true;
  }
  logged(){
    return true;
  }
  getRole(role:string){
    this.Role=role;
  }
  updateUser(user:User){
    const userIndex = this.userList.findIndex(x => x.id == user.id);
    this.userList[userIndex] = user;
  }

}

