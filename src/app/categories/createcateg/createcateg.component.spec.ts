import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecategComponent } from './createcateg.component';

describe('CreatecategComponent', () => {
  let component: CreatecategComponent;
  let fixture: ComponentFixture<CreatecategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatecategComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatecategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
