import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
name='MIDAS';  // Initialized
name1:string;
age:number;
email:string;
address:{
  street:string,
  city:string,
  state:string
};

address2:address;
hobbies:string[];
hellow:any;
  constructor() 
  {
    console.log('constructor ran..MIDAS');
   }

  ngOnInit() 
  {

console.log('ngOnInit ran...MIDAS');
this.name = "John Doe"
this.age =100;
this.email= "Midas@midas.com"
this.address= {
  street: 'Vashi',
  city: 'Navi Mumbai',
  state:  'maharashtra "so you think you can catch me" '
}
this.hobbies=['wirtecode','playgames'];
this.hellow=1616;   // Number or string
  }

onClick(){
  console.log('Button Clicked');
}

}

interface address{
  street:string,
  city:string,
  state:string
}