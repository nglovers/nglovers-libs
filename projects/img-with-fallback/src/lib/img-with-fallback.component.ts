import { Component, ElementRef, OnInit, ViewChild, effect, input } from '@angular/core';

@Component({
  selector: 'ngs2-img-with-fallback',
  standalone: true,
  imports: [],
  template: `
    <div #container></div>
  `,
  styles: `
    :host {
      display: flex;
      width: 100%;
    }

    div {
      width: 100%
    }
  `
})
export class ImgWithFallbackComponent implements OnInit {
  src = input<string>()
  fallbackSrc = input<string>()
  alt = input<string>()
  imgElement: HTMLImageElement;
  @ViewChild('container', { static: true }) container?: ElementRef<HTMLElement>;

  constructor() {
    this.imgElement = document.createElement('img');
    this.imgElement.style.width = '100%';
    this.imgElement.addEventListener('error', (error) => {
      console.error('img-error-listener', error);
      if (this.imgElement.src !== this.fallbackSrc()) {
        this.imgElement.src = this.fallbackSrc() || '';
      }
    })

    effect(() => {
      if (this.imgElement.src !== this.src()) {
        this.imgElement.src = this.src() || this.fallbackSrc() || '';
      }
    })
  }

  ngOnInit(): void {
    this.container?.nativeElement.append(this.imgElement);
  }
}
