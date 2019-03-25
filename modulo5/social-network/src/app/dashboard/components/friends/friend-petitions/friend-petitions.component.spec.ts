import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendPetitionsComponent } from './friend-petitions.component';

describe('FriendPetitionsComponent', () => {
  let component: FriendPetitionsComponent;
  let fixture: ComponentFixture<FriendPetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendPetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendPetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
