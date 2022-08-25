import { TestBed } from '@angular/core/testing';
import { UndrawSecureServerSvgComponent } from './undraw-secure-server-svg.component';
describe('UndrawSecureServerSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UndrawSecureServerSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UndrawSecureServerSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=undraw-secure-server-svg.component.spec.js.map