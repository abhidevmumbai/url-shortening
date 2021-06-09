import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailValidator, ReactiveFormsModule } from '@angular/forms';

import { ShortenUrlComponent } from './shorten-url.component';

describe('ShortenUrlComponent', () => {
  let component: ShortenUrlComponent;
  let fixture: ComponentFixture<ShortenUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ShortenUrlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('url field validity', () => {
    let errors: any = {};
    let url = component.form.controls['url'];
    expect(url.valid).toBeFalsy();

    errors = url.errors || {};
    expect(errors['required']).toBeTruthy();
    expect(errors['pattern']).toBeFalsy();

    url.setValue('https://google.com');
    errors = url.errors || {};
    expect(errors['pattern']).toBeFalsy();

    url.setValue('as');
    errors = url.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();
  });

  // it('should shorten the link', () => {
  //   component.shorten();
  // });
});
