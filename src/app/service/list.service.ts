import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User2 } from '../user2';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private userList: User2[] = [{
    _id: '1',
    date : '2/10/2022',
    descrip : 'diwali'
}];
readonly baseUrl='http://localhost:3000/holiday';
  
  constructor(private http:HttpClient) { }
//   getUsers(){
//     return this.userList
//   }
//   setUser(user :User2){
//     user.id = this.userList.length+1;
//     this.userList.push(user);

//   }
//   updateUser(user:User2){
//     const userIndex = this.userList.findIndex(x => x.id == user.id);
//     this.userList[userIndex] = user;
//   }
//   removeUser(id: number) {
//     this.userList = this.userList.filter(x => x.id != id);
// }
// getUsersByID(id: number) {
//   return this.userList.find(x => x.id == id)
// }
public getholiday() {
  return this.http.get(this.baseUrl);
}
public postHoliday(newHoliday:User2) {
  return this.http.post(this.baseUrl, newHoliday);
}
public putHoliday(newHoliday: User2,_id:string) {
  return this.http.put(this.baseUrl + `/${_id}`, newHoliday)
}
public deleteHoliday(_id: string) {
  return this.http.delete(this.baseUrl + `/${_id}`);
}
}