import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultform',
  templateUrl: './resultform.component.html',
  styleUrls: ['./resultform.component.css']
})
export class ResultformComponent implements OnInit {

  constructor() { }
  

  @Input('dataObj') resobj:any; 
  @Input('dataObj1') newzobj1:any; 
  
  ngOnInit(): void {
    this.resobj = {
      fname : "",
      lname : "",
      address : "",
      city : "",
      z_code : "" 
    }
  }

}
