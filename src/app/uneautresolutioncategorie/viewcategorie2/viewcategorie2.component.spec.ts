import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewcategorie2Component } from './viewcategorie2.component';

describe('Viewcategorie2Component', () => {
  let component: Viewcategorie2Component;
  let fixture: ComponentFixture<Viewcategorie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewcategorie2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Viewcategorie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
