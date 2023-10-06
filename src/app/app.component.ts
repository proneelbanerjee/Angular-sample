import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  handleSearch(searchTerm: string): void {
    console.log('Search term:', searchTerm);
  }
}
