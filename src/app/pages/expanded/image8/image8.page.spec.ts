import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Image8Page } from './image8.page';

describe('Image8Page', () => {
  let component: Image8Page;
  let fixture: ComponentFixture<Image8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Image8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Image8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
