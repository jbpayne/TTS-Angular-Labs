import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewerComponent } from './newer.component';

describe('NewerComponent', () => {
  let component: NewerComponent;
  let fixture: ComponentFixture<NewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
