import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my new first-project';
  name = 'add to me ...';
  onUpdateServerName(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
  }
}
