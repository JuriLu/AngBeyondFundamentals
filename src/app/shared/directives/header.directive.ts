import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  constructor(
    private elementRef:ElementRef
  ) {
      this.elementRef.nativeElement.style.backgroundColor = 'yellow'
  }

}
