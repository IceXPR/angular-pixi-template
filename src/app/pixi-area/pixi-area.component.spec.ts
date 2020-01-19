import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiAreaComponent } from './pixi-area.component';

describe('PixiAreaComponent', () => {
  let component: PixiAreaComponent;
  let fixture: ComponentFixture<PixiAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixiAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixiAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
