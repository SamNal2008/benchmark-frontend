import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { AppService } from './app.service';


let index = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log(index++);
  }

  sharedState = 'Hello from parent';
  sharedState$ = new BehaviorSubject(this.sharedState);


  title = 'angular-app';

  public updateSharedState(e: any) {
    this.sharedState = e.target.value;
    this.sharedState$.next(this.sharedState);
  }

}
