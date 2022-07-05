import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

role:string=''
  roleValue1:string=''
  data: string='';
  getRole(roleValue:string){
     this.role=roleValue
  }
getdata(){
    const data = this.getRole(this.roleValue1)
    this.role=this.data;
  }
}



