import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Image7Page } from './image7.page';

describe('Image7Page', () => {
  let component: Image7Page;
  let fixture: ComponentFixture<Image7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Image7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Image7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
