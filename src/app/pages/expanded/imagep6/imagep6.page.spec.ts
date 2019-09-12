import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagep6Page } from './imagep6.page';

describe('Imagep6Page', () => {
  let component: Imagep6Page;
  let fixture: ComponentFixture<Imagep6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagep6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagep6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
