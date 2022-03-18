import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  inpObj = {
    fname : "",
    lname : "",
    address : "",
    city : "",
    z_code : "" 
  }

  inpObj1="";
  constructor() { 
  }
  addResultObj(resobj : any){
    console.log(resobj);
    this.inpObj = {...resobj};
    console.log(this.inpObj);
  }
  ngOnInit(): void {
  }

}
