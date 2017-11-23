import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawPreviewComponent } from './raw-preview.component';

describe('RawPreviewComponent', () => {
  let component: RawPreviewComponent;
  let fixture: ComponentFixture<RawPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
