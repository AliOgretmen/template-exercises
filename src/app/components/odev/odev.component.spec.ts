import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdevComponent } from './odev.component';

describe('OdevComponent', () => {
  let component: OdevComponent;
  let fixture: ComponentFixture<OdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
