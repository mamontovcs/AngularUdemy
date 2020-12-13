import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CounterService} from './services/counter.service';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CounterService]
})
export class AppComponent implements OnInit {

  search = '';
  searchField = 'title';

  constructor(private counter: CounterService) {
  }

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 4000);
  });

  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  date: Date;

  posts: Post[] = [
    {title: 'Beer', text: 'The best beer'},
    {title: 'Bread', text: 'The best bread'},
    {title: 'JS', text: 'The best language'}
  ];

  addPost() {
    this.posts.unshift({
      title: 'New post',
      text: 'Vitaliy new post'
    });
  }

  ngOnInit(): void {
    this.date$.subscribe(date => {
      this.date = date;
    });
  }

}
