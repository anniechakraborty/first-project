import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {
  username: string = '';
  isEmpty : boolean = true;
  textVisibility : boolean = true;
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
}
