import { TestBed } from '@angular/core/testing';
import { LinkedinSvgComponent } from './linkedin-svg.component';
describe('LinkedinSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LinkedinSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(LinkedinSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=linkedin-svg.component.spec.js.map