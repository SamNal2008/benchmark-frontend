import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})
export class DependencyComponent implements OnInit {

  @Input() parentState = '';
  @Input() parentState$!: Observable<string>;

  public currentState = '';
  public currentStateObs = '';

  constructor() { }

  ngOnInit(): void {
    this.currentState = `==> ${this.parentState} <==`;
    this.parentState$.subscribe((newValue) => this.currentStateObs = `==> ${newValue} <==`);
  }

}
