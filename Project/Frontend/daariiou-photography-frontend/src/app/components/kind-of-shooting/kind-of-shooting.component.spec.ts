import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindOfShootingComponent } from './kind-of-shooting.component';

describe('KindOfShootingComponent', () => {
  let component: KindOfShootingComponent;
  let fixture: ComponentFixture<KindOfShootingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KindOfShootingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KindOfShootingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
