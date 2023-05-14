import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddContentComponent } from './popup-add-content.component';

describe('PopupAddContentComponent', () => {
  let component: PopupAddContentComponent;
  let fixture: ComponentFixture<PopupAddContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAddContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
