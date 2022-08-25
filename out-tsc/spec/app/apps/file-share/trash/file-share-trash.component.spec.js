import { TestBed } from '@angular/core/testing';
import { FileShareTrashComponent } from './file-share-trash.component';
describe('FileShareTrashComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FileShareTrashComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(FileShareTrashComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=file-share-trash.component.spec.js.map