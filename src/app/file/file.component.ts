import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  uploadedFiles: Array < File > ;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

fileChange(element: { target: { files: File[]; }; }) {
    this.uploadedFiles = element.target.files;
}
upload() {
  let formData = new FormData();
  for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
  }
  this.http.post('/api/upload', formData)
  .subscribe((response) => {
  })
}

}
