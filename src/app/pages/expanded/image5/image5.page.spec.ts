import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Image5Page } from './image5.page';

describe('Image5Page', () => {
  let component: Image5Page;
  let fixture: ComponentFixture<Image5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Image5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Image5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
