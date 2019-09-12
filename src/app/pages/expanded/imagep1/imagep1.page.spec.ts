import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagep1Page } from './imagep1.page';

describe('Imagep1Page', () => {
  let component: Imagep1Page;
  let fixture: ComponentFixture<Imagep1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagep1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagep1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
