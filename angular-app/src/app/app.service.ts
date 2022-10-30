import { Injectable } from '@angular/core';
import { fakeDatabase } from './fake';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getData() {
    return fakeDatabase;
  }
}
