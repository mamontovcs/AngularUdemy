import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'New Text here!';
  value = '';

  constructor() {

  }

  OnInput(event: KeyboardEvent) {

    console.log(event);
    this.value = (event.target as HTMLInputElement).value;
  }

  OnClick() {
    console.log('click!');
  }

  OnBlur(str: string) {
    this.value = str;
    console.log(str);
  }

}
