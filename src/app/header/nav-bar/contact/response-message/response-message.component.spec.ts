import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseMessageComponent } from './response-message.component';

describe('ResponseMessageComponent', () => {
  let component: ResponseMessageComponent;
  let fixture: ComponentFixture<ResponseMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseMessageComponent]
    });
    fixture = TestBed.createComponent(ResponseMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
