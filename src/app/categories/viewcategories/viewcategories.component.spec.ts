import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcategoriesComponent } from './viewcategories.component';

describe('ViewcategoriesComponent', () => {
  let component: ViewcategoriesComponent;
  let fixture: ComponentFixture<ViewcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
