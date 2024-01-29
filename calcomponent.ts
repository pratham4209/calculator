import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1: number=0;
  num2: number=0;
  result: number=0;

  add() {
    this.result = this.num1 + this.num2;
  }

  subtract() {
    this.result = this.num1 - this.num2;
  }
