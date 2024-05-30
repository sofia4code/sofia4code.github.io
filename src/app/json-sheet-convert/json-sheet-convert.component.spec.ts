import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonSheetConvertComponent } from './json-sheet-convert.component';

describe('JsonSheetConvertComponent', () => {
  let component: JsonSheetConvertComponent;
  let fixture: ComponentFixture<JsonSheetConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonSheetConvertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonSheetConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
