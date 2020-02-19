import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  @Input()list;
  students = [
    {
      "name": 'venu',
      "city": 'guntur'
      
    },
    {
      "name": 'vishnu',
      "city": 'hyd'
    
    },
    {
      "name": 'sai',
      "city": 'pune'
    
    },
    {
      "name": 'mahesh',
      "city": 'vza'
     
    },
    {
      "name": 'naveen',
      "city": 'hyd'
   
    }, 
    {
      "name": 'mokshagna',
      "city": 'chennai'
     
    },
  ];
}
