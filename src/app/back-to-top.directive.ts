import { Directive, ElementRef, HostListener, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[backToTop]'
})

export class BackToTopDirective  {
  constructor(private eRef : ElementRef) { }

  @HostListener('click') onClick() {
    console.warn('Back to top directive trigger click event ');
    window.scrollTo(0, 500);
  }
  
}
