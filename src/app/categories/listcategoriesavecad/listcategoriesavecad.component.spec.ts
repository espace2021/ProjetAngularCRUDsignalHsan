import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcategoriesavecadComponent } from './listcategoriesavecad.component';

describe('ListcategoriesavecadComponent', () => {
  let component: ListcategoriesavecadComponent;
  let fixture: ComponentFixture<ListcategoriesavecadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListcategoriesavecadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListcategoriesavecadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
