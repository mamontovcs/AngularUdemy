import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable({})
export class CounterService {

  constructor(private logger: LogService) {
  }

  counter = 0;

  increase() {
    console.log('Increased');
    this.counter++;
  }

  decrease() {
    console.log('Decreased');
    this.counter--;
  }
}
