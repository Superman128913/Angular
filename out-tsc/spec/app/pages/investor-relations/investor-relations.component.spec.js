import { TestBed } from '@angular/core/testing';
import { InvestorRelationsComponent } from './investor-relations.component';
describe('InvestorRelationsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InvestorRelationsComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(InvestorRelationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=investor-relations.component.spec.js.map