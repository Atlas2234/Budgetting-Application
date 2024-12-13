// Service for calculating budget
import { Injectable, signal } from '@angular/core';

import { BudgettingInput } from './budgetting-input.model';

@Injectable({ providedIn: 'root' })
export class BudgetService {
  resultData = signal<
    | {
        earnings: number;
        savings: number;
        spendings: number;
        totalSavings: number;
        totalExpenses: number;
      }
    | undefined
  >(undefined);

  calculateBudgettingResults(data: BudgettingInput) {
    let countSaveTotal: number = 0;
    let countSpendTotal: number = 0;
    let earnings: number = 0;
    let percentNumeric: number = 0;
    let percentString: string = '';
    let savings: number = 0;
    let spendings: number = 0;

    earnings = data.enteredEarningsPerPaycheck;

    percentNumeric = data.enteredPercentToSave / 100;
    percentString = `${data.enteredPercentToSave}%`;

    savings = earnings * percentNumeric;
    spendings = earnings - savings;

    for (let i: number = 0; i < data.enteredNumberOfYears; i++) {
      countSpendTotal += spendings;
      countSaveTotal += savings;
    }

    this.resultData.set({
      earnings: earnings,
      savings: savings,
      spendings: spendings,
      totalSavings: countSaveTotal,
      totalExpenses: countSpendTotal,
    });

    console.log(this.resultData);
  }
}
