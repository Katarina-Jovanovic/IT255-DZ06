import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PletComponent } from './plet.component';

describe('PletComponent', () => {
  let component: PletComponent;
  let fixture: ComponentFixture<PletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
