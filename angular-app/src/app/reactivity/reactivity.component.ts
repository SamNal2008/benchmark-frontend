import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactivity',
  templateUrl: './reactivity.component.html',
  styleUrls: ['./reactivity.component.css']
})
export class ReactivityComponent {


  public count = 0;

  public increaseCount() {
    console.log(this.count);
    this.count++;
  }

}
