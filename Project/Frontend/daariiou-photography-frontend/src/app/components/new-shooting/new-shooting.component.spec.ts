import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShootingComponent } from './new-shooting.component';

describe('NewShootingComponent', () => {
  let component: NewShootingComponent;
  let fixture: ComponentFixture<NewShootingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShootingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShootingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
