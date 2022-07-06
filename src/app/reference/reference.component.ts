import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }


  name:string="";
  file:any;

  getName(name:string){
    this.name=name;

  }

  getFile(event:any){
    this.file=event.target.files[0];
    console.log('file',this.file);
  }

  submitData(){
    let formData=new FormData();
    formData.set("name",this.name)
    formData.set("file",this.file)
  }

}
