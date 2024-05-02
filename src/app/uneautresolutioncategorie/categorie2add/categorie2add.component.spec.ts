import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorie2addComponent } from './categorie2add.component';

describe('Categorie2addComponent', () => {
  let component: Categorie2addComponent;
  let fixture: ComponentFixture<Categorie2addComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorie2addComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Categorie2addComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
