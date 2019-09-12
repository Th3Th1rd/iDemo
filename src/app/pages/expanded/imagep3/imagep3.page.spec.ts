import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagep3Page } from './imagep3.page';

describe('Imagep3Page', () => {
  let component: Imagep3Page;
  let fixture: ComponentFixture<Imagep3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagep3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagep3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
