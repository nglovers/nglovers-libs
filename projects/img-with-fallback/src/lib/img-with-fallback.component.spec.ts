import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgWithFallbackComponent } from './img-with-fallback.component';

describe('ImgWithFallbackComponent', () => {
  let component: ImgWithFallbackComponent;
  let fixture: ComponentFixture<ImgWithFallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgWithFallbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgWithFallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
