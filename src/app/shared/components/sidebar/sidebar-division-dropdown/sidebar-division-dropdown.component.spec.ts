import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SidebarDivisionDropdownComponent} from './sidebar-division-dropdown.component';

describe('SidebarDivisionDropdownComponent', () => {
  let component: SidebarDivisionDropdownComponent;
  let fixture: ComponentFixture<SidebarDivisionDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarDivisionDropdownComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDivisionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
