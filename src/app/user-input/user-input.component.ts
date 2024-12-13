// Component for displaying and processing user input
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../budgetting.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredEarningsPerPaycheck = signal('0');
  enteredPercentToSave = signal('0');
  enteredNumberOfYears = signal('1');

  constructor(private budgettingService: BudgetService) {}

  onSubmit() {
    this.budgettingService.calculateBudgettingResults({
      enteredEarningsPerPaycheck: +this.enteredEarningsPerPaycheck(),
      enteredPercentToSave: +this.enteredPercentToSave(),
      enteredNumberOfYears: +this.enteredNumberOfYears(),
    });
    console.log('submitted');
    // console.log(this.enteredLatestEarnings);
    // console.log(this.enteredLatestSpendings);
  }
}
