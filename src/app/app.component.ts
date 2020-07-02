import { Component } from '@angular/core';

// this is call "decorator"
// it includes metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Wello Horld';
}
