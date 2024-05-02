import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modifcategorie2Component } from './modifcategorie2.component';

describe('Modifcategorie2Component', () => {
  let component: Modifcategorie2Component;
  let fixture: ComponentFixture<Modifcategorie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modifcategorie2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Modifcategorie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
