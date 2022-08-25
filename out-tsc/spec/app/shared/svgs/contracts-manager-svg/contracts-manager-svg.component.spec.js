import { TestBed } from '@angular/core/testing';
import { ContractsManagerSvgComponent } from './contracts-manager-svg.component';
describe('ContractsManagerSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContractsManagerSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(ContractsManagerSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contracts-manager-svg.component.spec.js.map