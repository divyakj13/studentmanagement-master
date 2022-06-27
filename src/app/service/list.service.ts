import { Injectable } from '@angular/core';
import { User2 } from '../user2';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private userList: User2[] = [{
    id: 1,
    date : '2/10/2022',
    descrip : 'diwali'
}];
  constructor() { }
  getUsers(){
    return this.userList
  }
  setUser(user :User2){
    user.id = this.userList.length+1;
    this.userList.push(user);

  }
  updateUser(user:User2){
    const userIndex = this.userList.findIndex(x => x.id == user.id);
    this.userList[userIndex] = user;
  }
  removeUser(id: number) {
    this.userList = this.userList.filter(x => x.id != id);
}
getUsersByID(id: number) {
  return this.userList.find(x => x.id == id)
}
}
