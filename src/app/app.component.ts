import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    //{title: 'Мой первый пост', text: 'Я все еще учу Ангуляр'},
    {title: 'Мой второй пост', text: 'Я хочу быть фулл стэком'},
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

}
