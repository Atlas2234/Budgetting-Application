import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetResultsComponent } from './budget-results.component';

describe('BudgetResultsComponentComponent', () => {
  let component: BudgetResultsComponent;
  let fixture: ComponentFixture<BudgetResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetResultsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
