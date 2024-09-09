import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulepopupComponent } from './modulepopup.component';

describe('ModulepopupComponent', () => {
  let component: ModulepopupComponent;
  let fixture: ComponentFixture<ModulepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulepopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
