// Component for displaying the calculated budgetting and savings
import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { BudgetService } from '../budgetting.service';

@Component({
  selector: 'app-budget-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './budget-results.component.html',
  styleUrl: './budget-results.component.css',
})
export class BudgetResultsComponent {
  private budgettingService = inject(BudgetService);

  results = computed(() => this.budgettingService.resultData());
}
