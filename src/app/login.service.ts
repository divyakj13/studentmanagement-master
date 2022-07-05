import { Injectable } from '@angular/core';
import { User } from './user1';
import { User1 } from './user/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  userLogin=new User1(' ',' ');
  public userList: User[] = [{
    _id:'1',
    username: 'divya',
    email: 'divya@gmail.com',
    gender: 'female',
    phone: '9360506366',
    regNum:"ACE1111",
    password:"divya@123",
    Confirmpassword:"divya@123"
}];

user:User1[]=[];
user1!:User;
readonly baseUrl='http://localhost:3000/student';
id1:number=0;
Role:string='';

constructor(private http:HttpClient){}
  

  getDetails(userForm:User){
    
    return this.http.post(this.baseUrl,userForm)

  }

//   setMessage(user: User){
//     user._id = this.userList.length+1;
//     this.userList.push(user);

//   }
//   getUsersByName(name : String){
//     this.userList = this.userList.filter(x => x.username != name);
//   }
//   getUsers(){
//     return this.userList
//   }
//   getUsersByID(id: number){
//     return this.userList.find(x => x._id == id)
//   }
//   removeUser(name : String) {
//     this.userList = this.userList.filter(x => x.username != name);
// }
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
  public deleteUser(_id: number) {
    return this.http.delete(this.baseUrl + `/${_id}`)
  }
}

