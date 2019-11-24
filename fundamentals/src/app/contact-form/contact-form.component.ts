import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
contactMethods = [
  { id: 1, name: 'blown' },
  { id: 2, name: 'Clone' },
  { id: 3, name: 'Bone' },
  { id: 4, name: 'Drone' },
];
  submit(form) {
    console.log(JSON.stringify(form.value));
  }
}

