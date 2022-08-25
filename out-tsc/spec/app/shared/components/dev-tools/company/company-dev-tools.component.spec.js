import { TestBed } from '@angular/core/testing';
import { CompanyDevToolsComponent } from './company-dev-tools.component';
describe('CompanyDevToolsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CompanyDevToolsComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyDevToolsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=company-dev-tools.component.spec.js.map