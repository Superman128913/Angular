import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileShareSettingsComponent} from './file-share-settings.component';

describe('FileShareSettingsComponent', () => {
  let component: FileShareSettingsComponent;
  let fixture: ComponentFixture<FileShareSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileShareSettingsComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileShareSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
