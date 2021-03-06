import { Component } from '@angular/core';
import { } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // [] means property binding component to DOM
  // () means event binding DOM to component
  title = 'Customer App';
  name='Ward';
  wardsColor='green';

  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
  }
}
