import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class ApiCallsComponent implements OnInit, OnDestroy {

  public data: string = '';
  public isLoading: boolean = false;
  public error: string | undefined = undefined;

  private destroy$ = new Subject<void>();


  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

  fetchData(errorWanted?: boolean) {
    this.isLoading = true;
    this.error = undefined;
    this.appService.getData(errorWanted)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      {
        next: (data) => {
          this.data = data;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = err;
          this.isLoading = false;
        }
      }
    );
  }

}
