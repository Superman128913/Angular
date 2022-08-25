import { TestBed } from '@angular/core/testing';
import { SidebarUserDropdownComponent } from './sidebar-user-dropdown.component';
describe('SidebarUserDropdownComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SidebarUserDropdownComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarUserDropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sidebar-user-dropdown.component.spec.js.map