import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tese';
  creating: boolean = false;
  interfacesList: string[] = ['Member', 'Team', 'Unity'];

  setCreatingStatus() {
    this.creating = !this.creating;
  }
}
