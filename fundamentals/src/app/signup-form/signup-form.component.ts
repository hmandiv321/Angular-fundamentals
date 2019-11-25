import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      UsernameValidators.cannotContainSpace
    ], UsernameValidators.shouldBeUnique),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ])
  });
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
}
