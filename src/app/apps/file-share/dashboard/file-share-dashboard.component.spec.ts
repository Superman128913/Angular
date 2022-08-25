import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileShareDashboardComponent} from './file-share-dashboard.component';

describe('FileShareDashboardComponent', () => {
  let component: FileShareDashboardComponent;
  let fixture: ComponentFixture<FileShareDashboardComponent>;

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
