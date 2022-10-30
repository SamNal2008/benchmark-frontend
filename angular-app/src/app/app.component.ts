import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  public count = 0;

  public increaseCount() {
    console.log(this.count);
    this.count++;
  }
}
