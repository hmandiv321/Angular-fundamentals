import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent {
@Input('likeCount') likeCount: number;
@Input('isActive') isActive: boolean;

onClick() {
this.likeCount += (this.isActive) ? -1 : 1;
this.isActive = !this.isActive;
}

}
