import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditContentComponent } from './popup-edit-content.component';

describe('PopupEditContentComponent', () => {
  let component: PopupEditContentComponent;
  let fixture: ComponentFixture<PopupEditContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupEditContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
