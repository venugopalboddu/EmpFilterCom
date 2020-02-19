import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  status: boolean = false;
  constructor() { }
  data: any;
  fn(e) {
    this.data = e;
  }
  ngOnInit() {
  }
 call(){
   this.status = true;
 }
}
