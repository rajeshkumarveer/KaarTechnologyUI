import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-entryform',
  templateUrl: './entryform.component.html',
  styleUrls: ['./entryform.component.css']
})
export class EntryformComponent implements OnInit {
  
  inpObj = {
    fname : "",
    lname : "",
    address : "",
    city : "",
    z_code : ""
  }
  
  constructor() {
 
  }
  
  ngOnInit(): void {  }
  
  @Output() resObj = new EventEmitter<any>();
  showResult(){
    this.resObj.emit(this.inpObj);
  }

}
