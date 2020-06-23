import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartItemComponent } from './user-cart-item.component';

describe('UserCartItemComponent', () => {
  let component: UserCartItemComponent;
  let fixture: ComponentFixture<UserCartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
