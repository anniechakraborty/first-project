import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // to demonstrate property binding, we created a new button (in the template file) called
  // Add Server and we are going to bind computed value to the button property in that file
  allowNewServer = false;
  serverCreationStatus = "No server was created !";
  serverName = "";
  serversCreated = [];
  constructor(){
    setTimeout( ()=> {
      this.allowNewServer = true;
    }, 2000);
    // so basically, after 2s the allowNewServer property will be true
  }
  ngOnInit(): void {
    
  }

  onServerCreation(){
    this.serversCreated.push(this.serverName);
    this.serverCreationStatus = 'New server was created! The name is : ' + this.serverName;
  }
}
