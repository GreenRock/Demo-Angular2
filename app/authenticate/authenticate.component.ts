import { Component } from '@angular/core';

import { LoginForm } from './authenticate'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'authenticate-form',
    templateUrl: 'authenticate-template.html'
})
export class AuthenticateComponent {

 registerForm: LoginForm;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = new LoginForm();
  }


  submitForm(value: any){
    console.info(value);
  }

}

