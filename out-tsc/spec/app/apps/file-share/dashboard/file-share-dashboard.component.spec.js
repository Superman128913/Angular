import { TestBed } from '@angular/core/testing';
import { FileShareDashboardComponent } from './file-share-dashboard.component';
describe('FileShareDashboardComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FileShareDashboardComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(FileShareDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=file-share-dashboard.component.spec.js.map