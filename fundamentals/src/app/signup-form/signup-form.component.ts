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
    // nested formGroup example
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        UsernameValidators.cannotContainSpace
      ], UsernameValidators.shouldBeUnique),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ])
    }),
  });
  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
  get username() {
    return this.form.get('account.username');
  }
  get password() {
    return this.form.get('account.password');
  }
}
