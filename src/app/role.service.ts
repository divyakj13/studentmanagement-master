import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
roleVal:string=''
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

set setUserRole(val:string){
  this.roleVal=val;
  console.log(this.roleVal);
  
}
get getUserRole(){
  return this.roleVal;

}


}



