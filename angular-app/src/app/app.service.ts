import { Injectable } from '@angular/core';
import { delay, dematerialize, materialize, Observable, of, throwError } from 'rxjs';
import { FakeData, fakeDatabase } from './fake';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getData(errorWanted?: boolean): Observable<string> {
    return errorWanted ?
      throwError(() => new Error('')).pipe(materialize(), delay(5000), dematerialize()) :
      of(JSON.stringify(fakeDatabase)).pipe(delay(5000));
  }
}
