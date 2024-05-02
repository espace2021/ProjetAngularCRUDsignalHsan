import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcategoriesavecadComponent } from './viewcategoriesavecad.component';

describe('ViewcategoriesavecadComponent', () => {
  let component: ViewcategoriesavecadComponent;
  let fixture: ComponentFixture<ViewcategoriesavecadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcategoriesavecadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewcategoriesavecadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
