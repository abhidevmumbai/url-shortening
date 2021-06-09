import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenedUrlListComponent } from './shortened-url-list.component';

describe('ShortenedUrlListComponent', () => {
  let component: ShortenedUrlListComponent;
  let fixture: ComponentFixture<ShortenedUrlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortenedUrlListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenedUrlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
