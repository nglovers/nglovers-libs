import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgWithFallbackComponent } from 'img-with-fallback';
import { ImgWithFallbackDirective } from '../../../img-with-fallback/src/lib/img-with-fallback.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ImgWithFallbackComponent,
    ImgWithFallbackDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'playground';

  src: string | undefined = undefined;
  wrongSrc: string | undefined = "https://www.google.com/logos/doodles/2024/paris-gaaames-sailing-day-2-6753651837110530-la202124.gif";
  // src = "https://www.google.com/logos/doodles/2024/paris-gaaames-sailing-day-2-6753651837110530-la202124.gif"
  // src = "https://www.google.com/logos/doodles/2024/paris-games-sailing-day-2-6753651837110530-la202124.gif"

  fallbackSrc = "/img/error-404.webp"

  ngOnInit(): void {
    setTimeout(() => {
      this.wrongSrc = "https://www.google.com/logos/doodles/2024/paris-gaaames-sailing-day-2-6753651837110530-la202124.gif"
      this.src = "https://www.google.com/logos/doodles/2024/paris-games-sailing-day-2-6753651837110530-la202124.gif"
    }, 3000)
  }
}
