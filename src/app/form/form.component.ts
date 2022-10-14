import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  phone: FormControl;
  address: FormControl;

  
  submit() {
    if (this.myForm.valid) {
      
    }
  };

  constructor() {}

  ngOnInit() {
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*'),
    ]);

    this.lastName = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*'),
    ]);

    this.email = new FormControl('', [Validators.required, Validators.email]);

    this.phone = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(/^[0-9]\d*$/),
    ]);

    this.address = new FormControl('', Validators.required);

    this.myForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: this.address,
    });
  }
}
