import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LilianOsuriComponent } from './lilian-osuri.component';

describe('LilianOsuriComponent', () => {
  let component: LilianOsuriComponent;
  let fixture: ComponentFixture<LilianOsuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LilianOsuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LilianOsuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
