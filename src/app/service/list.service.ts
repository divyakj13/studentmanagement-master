import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User2 } from '../user2';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private userList: User2[] = [{
    _id: '',
    date : '',
    descrip : ''
}];

readonly baseUrl='http://localhost:3000/holiday';
  
  constructor(private http:HttpClient) { }

  getLeave(_id:string){
    return this.http.get(this.baseUrl+`/${_id}`);
  }


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