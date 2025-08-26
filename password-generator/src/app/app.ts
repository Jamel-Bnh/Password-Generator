import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {PasswordGeneratorComponent} from './password-generator/password-generator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordGeneratorComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('password-generator-scss');
}
