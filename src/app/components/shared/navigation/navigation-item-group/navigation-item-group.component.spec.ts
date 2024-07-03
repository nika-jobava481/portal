import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationItemGroupComponent } from './navigation-item-group.component';

describe('NavigationItemGroupComponent', () => {
  let component: NavigationItemGroupComponent;
  let fixture: ComponentFixture<NavigationItemGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationItemGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationItemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
