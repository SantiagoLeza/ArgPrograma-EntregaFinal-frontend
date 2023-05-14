import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditSectionComponent } from './popup-edit-section.component';

describe('PopupEditSectionComponent', () => {
  let component: PopupEditSectionComponent;
  let fixture: ComponentFixture<PopupEditSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupEditSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
