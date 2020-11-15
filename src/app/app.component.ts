import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit {

  isVisible = true;

  posts: Post[] = [
    {title: 'Мой первый пост', text: 'Я все еще учу Ангуляр', id: 3123123},
    {title: 'Мой второй пост', text: 'Я хочу быть фулл стэком', id: 345678},
  ];

  ngOnInit(): void {
    setTimeout(() => {
        console.log('TimeOut');
        this.posts[0] = {
          title: 'Changed',
          text: 'changed 2',
          id: 147
        };
      }
      , 5000);
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    console.log(id);
    this.posts = this.posts.filter(p => p.id !== id);
  }

}
