import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Image6Page } from './image6.page';

describe('Image6Page', () => {
  let component: Image6Page;
  let fixture: ComponentFixture<Image6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Image6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Image6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
