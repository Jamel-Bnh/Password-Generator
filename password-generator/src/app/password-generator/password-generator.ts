import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password-generator.html',
  styleUrls: ['./password-generator.scss'],
})
export class PasswordGeneratorComponent {
  includeLowercase: boolean = false;
  includeUppercase: boolean = false;
  includeSymbols: boolean = false;
  includeNumbers: boolean = false;

  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  lower = 'abcdefghijklmnopqrstuvwxyz';
  numbers = '0123456789';
  symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  passwordLength = 10 ;
  generatedPassword = '';
  copySuccess : boolean = false;

  passwordGenerator() {
    let allChars = '';
    let password = '';

    if (this.includeUppercase) {
      allChars += this.upper;
    }
    if (this.includeLowercase) {
      allChars += this.lower;
    }
    if (this.includeNumbers) {
      allChars += this.numbers;
    }
    if (this.includeSymbols) {
      allChars += this.symbols;
    }

    if (allChars === '') {
      alert('Please select at least one option!');
      return;
    }

    for (let i = 0; i < this.passwordLength; i++) {
      let index = Math.floor(Math.random() * allChars.length);
      password += allChars[index];
    }

    this.generatedPassword = password;
  }

   copyPassword() {
    if (!this.generatedPassword) return;

    navigator.clipboard.writeText(this.generatedPassword).then(() => {
      this.copySuccess = true;

      setTimeout(() => {
        this.copySuccess = false;
      }, 2000);
    });
  }

  reset() {
    this.includeLowercase = false;
    this.includeUppercase = false;
    this.includeSymbols = false;
    this.includeNumbers = false;
    this.passwordLength = 12;
    this.generatedPassword = '';
    this.copySuccess = false;
  }
}
