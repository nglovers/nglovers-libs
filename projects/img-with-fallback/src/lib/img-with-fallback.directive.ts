import { Directive, ElementRef, input, effect } from '@angular/core';

@Directive({
  selector: '[ngs2ImgWithFallback]',
  standalone: true
})
export class ImgWithFallbackDirective {
  imageSrc = input<string>();
  fallbackSrc = input<string>();
  imgElement: HTMLImageElement;

  constructor(el: ElementRef<HTMLImageElement>) {
    this.imgElement = el.nativeElement;
    this.imgElement.addEventListener('error', (error) => {
      console.error('img-error-listener', error);
      if (this.imgElement.src !== this.fallbackSrc()) {
        this.imgElement.src = this.fallbackSrc() || '';
      }
    })

    effect(() => {
      if (this.imgElement.src !== this.imageSrc()) {
        this.imgElement.src = this.imageSrc() || this.fallbackSrc() || '';
      }
      
    })
  }
}
