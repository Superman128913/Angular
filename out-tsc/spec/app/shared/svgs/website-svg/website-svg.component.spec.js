import { TestBed } from '@angular/core/testing';
import { WebsiteSvgComponent } from './website-svg.component';
describe('WebsiteSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WebsiteSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(WebsiteSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=website-svg.component.spec.js.map