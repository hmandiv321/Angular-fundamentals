import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  /**
   * Getting a reference to the input field
   */
  constructor(private el: ElementRef) { }
  // Look at app.component.html for why
  // I am calling it appInputFormat ref: vid: 9:10
  @Input('appInputFormat') format: string;
  @HostListener('focus') onFocus() {
    console.log('focus');
  }
  @HostListener('blur') onBlur() {
    // the nativeElement property gives us access
    // to the actual dom object
    const value: string = this.el.nativeElement.value;
    if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }

  }
}
