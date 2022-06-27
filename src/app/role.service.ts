import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

//   constructor() { }
//   roleValue:string='';
//  getRole(role:string){
//     console.log("service roll b"+this.roleValue)
//     this.roleValue=role
//     console.log("service roll a"+this.roleValue)
//     return this.roleValue;
//  } 
// }
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



