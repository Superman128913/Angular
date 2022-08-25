import { TestBed } from '@angular/core/testing';
import { UndrawFileSyncSvgComponent } from './undraw-file-sync-svg.component';
describe('UndrawFileSyncSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UndrawFileSyncSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UndrawFileSyncSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=undraw-file-sync-svg.component.spec.js.map