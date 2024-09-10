import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  
  enteredIntitalInvestment='0';
  enteredAnnualInvestment='0';
  enteredExpectedReturn='5';
  enteredDuration='10';
  constructor(private investmentService : InvestmentService) {}
onSubmit()
{
  this.investmentService.calculateInvestmentResults({
    initialInvestment: +this.enteredIntitalInvestment,
    duration: +this.enteredDuration,
    annualInvestment: +this.enteredAnnualInvestment,
    expectedReturn: +this.enteredDuration
  });

this.enteredIntitalInvestment='0';
this.enteredDuration='10';
this.enteredAnnualInvestment='0';
this.enteredExpectedReturn='5';
}
}
