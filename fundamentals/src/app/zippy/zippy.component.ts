import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
// Step 2
@Input('title') title: string;
isExpanded: boolean;
expand() {
  this.isExpanded = !this.isExpanded;
}
}
