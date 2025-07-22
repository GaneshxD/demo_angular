import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Click Counter App');
  protected readonly count = signal(0);

  incrementCounter() {
    this.count.set(this.count() + 1);
  }

  resetCounter() {
    this.count.set(0);
  }
}
