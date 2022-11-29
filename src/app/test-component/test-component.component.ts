import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
  styles : [`
  .margin{
    margin: 10%;
  }
  .borderCol{
    border: 3px solid green;
  }
  `]
})
export class TestComponentComponent {
  username: string = '';
  isEmpty : boolean = true;
  textVisibility : boolean = true;
  randVal : number = 0.0;
  buttonClicks : number[] = [];

  checkUsername(){
    if (this.username == ''){
      return true;
    }
    else{
      return false;
    }
  }
  seeText(){
    this.textVisibility = true;
  }
  hideText(){
    this.textVisibility = false;
  }
  toggleVisibiltyRandom(){
    this.randVal = Math.random();
    this.buttonClicks.push(this.randVal);
    this.textVisibility = !this.textVisibility;
  }
}
