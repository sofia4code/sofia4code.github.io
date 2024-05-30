import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Buffer } from 'buffer';


@Component({
  selector: 'app-base64-encode',
  templateUrl: './base64-encode.component.html',
  styleUrl: './base64-encode.component.scss'
})
export class Base64EncodeComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      myinput: [''],
    });
  }
  submit() {
    console.log(this.form.value.myinput);
    return Buffer.from(this.form.value.myinput, 'binary').toString('base64')
  }
}
