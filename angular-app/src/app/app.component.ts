import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, of, Subject, takeUntil } from 'rxjs';
import { AppService } from './app.service';
import { FakeData } from './fake';


enum FetchingState {
  ERROR = 'error',
  LOADING = 'loading',
  SUCCESS = 'success'
}

let index = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'angular-app';


  public data: string = '';
  public error: string = '';

  currentFetchingState: FetchingState = FetchingState.LOADING;
  FetchingState = FetchingState;

  private destroy$ = new Subject<void>();


  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    console.log(index++);
    this.fetchData();
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

  fetchData(errorWanted?: boolean) {
    this.currentFetchingState = FetchingState.LOADING;
    this.appService.getData(errorWanted)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      {
        next: (data) => {
          this.data = data;
          this.currentFetchingState = FetchingState.SUCCESS;
        },
        error: (err) => {
          this.error = err;
          this.currentFetchingState = FetchingState.ERROR;
        }
      }
    );
  }

  public count = 0;

  public increaseCount() {
    console.log(this.count);
    this.count++;
  }
}
