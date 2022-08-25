import { TestBed } from '@angular/core/testing';
import { UndrawSyncFilesSvgComponent } from './undraw-sync-files-svg.component';
describe('UndrawSyncFilesSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UndrawSyncFilesSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UndrawSyncFilesSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=undraw-sync-files-svg.component.spec.js.map