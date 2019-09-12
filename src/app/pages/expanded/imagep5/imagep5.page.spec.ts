import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagep5Page } from './imagep5.page';

describe('Imagep5Page', () => {
  let component: Imagep5Page;
  let fixture: ComponentFixture<Imagep5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagep5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagep5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
