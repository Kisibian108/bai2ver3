import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.pattern('^\\w+([.-]?\\w+)*@[a-z]+\\.(\\w+){2,}(\\.\\w{2,3})?'),Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
  });

  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  ngOnInit(): void {
  }

}
