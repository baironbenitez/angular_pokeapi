import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[imgNotfound]' })

export class ImgNotFoundDirective {

    @Input() imgDefault = 'assets/type_icon/image-notfound.png'

  constructor(private element:ElementRef){
    console.log('asdasd');
    
  } 

  @HostListener('error')
  onError() {
    this.element.nativeElement.src = this.imgDefault;
    console.log('load');
    
  }
}