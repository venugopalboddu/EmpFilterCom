import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  names: any;
  constructor(private fb: FormBuilder) { }
  contactForm: FormGroup;
  submitted = false;
  data: any;
  status1: boolean = false;
  status2: boolean = true;
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required]
    });
  }
  get cf() { return this.contactForm.controls; }

  @Output() show = new EventEmitter();

  onSubmit() {
    this.submitted = true;
      this.names = this.contactForm.controls['name'].value;
    if (this.contactForm.invalid) {
      return;
    } else {
      this.show.emit(this.names);
      console.log(this.names);
    }
  }

}
