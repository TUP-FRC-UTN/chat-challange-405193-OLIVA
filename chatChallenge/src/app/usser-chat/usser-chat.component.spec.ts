import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsserChatComponent } from './usser-chat.component';

describe('UsserChatComponent', () => {
  let component: UsserChatComponent;
  let fixture: ComponentFixture<UsserChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsserChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsserChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
