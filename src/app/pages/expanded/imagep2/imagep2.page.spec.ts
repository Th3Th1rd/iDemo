import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagep2Page } from './imagep2.page';

describe('Imagep2Page', () => {
  let component: Imagep2Page;
  let fixture: ComponentFixture<Imagep2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagep2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
