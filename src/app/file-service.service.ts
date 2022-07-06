import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private http:HttpClient) { }

  readonly baseUrl='http://localhost:3000/file';

//   upload():Observable<any> {
  
  
//     const formData = new FormData(); 
//     formData.append("file", File, file.name);
//     return this.http.post(this.baseUrl, formData)
// }
}
