import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Image4Page } from './image4.page';

describe('Image4Page', () => {
  let component: Image4Page;
  let fixture: ComponentFixture<Image4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Image4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Image4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
