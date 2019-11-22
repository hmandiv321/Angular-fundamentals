import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
@Input('isFavorite') isActive: boolean;
@Input('clickedAmount') clickedAmount = 0;
@Output('change') changeEvent = new EventEmitter();

  onClick() {
    this.changeEvent.emit({
      newIsActive: this.isActive,
      newClickedActive: this.clickedAmount
    });
  }
}
export interface TestEventArgs {
  newIsActive: boolean;
  newClickedAmount: number;
}
