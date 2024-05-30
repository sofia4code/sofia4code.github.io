import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-base64-decode',
  templateUrl: './base64-decode.component.html',
  styleUrl: './base64-decode.component.scss'
})
export class Base64DecodeComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      myinput: [''],
    });
  }
  submit() {
    console.log(this.form.value.myinput);
    return Buffer.from(this.form.value.myinput, 'base64').toString('binary')
  }
}
