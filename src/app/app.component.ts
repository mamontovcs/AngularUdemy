import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = '';
  searchField = 'title';

  posts: Post[] = [
    {title: 'Beer', text: 'The best beer'},
    {title: 'Bread', text: 'The best bread'},
    {title: 'JS', text: 'The best language'}
  ];

}
