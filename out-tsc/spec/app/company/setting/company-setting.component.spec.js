// Angular
import { TestBed } from '@angular/core/testing';
// Libraries
// Application
import { CompanySettingComponent } from './company-setting.component';
describe('CompanyProfileComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CompanySettingComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CompanySettingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=company-setting.component.spec.js.map