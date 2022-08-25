import { TestBed } from '@angular/core/testing';
import { SidebarDivisionDropdownComponent } from './sidebar-division-dropdown.component';
describe('SidebarDivisionDropdownComponent', () => {
    let component;
    let fixture;
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
//# sourceMappingURL=sidebar-division-dropdown.component.spec.js.map