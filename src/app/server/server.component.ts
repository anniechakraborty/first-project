import { Component } from '@angular/core'
@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
    .online{
        border : 1px solid green;
    }
    `]
})
export class ServerComponent{
    serverID : number = 10;
    status : string = 'offline';
    name = 'Annie Home';
    
    getServerName(){
        return this.name;
    }

    constructor (){
        this.status = Math.random() > 0.5 ? 'online' : 'offline';
    }
    
    getColour(){
        return this.status == 'online' ? 'green' : 'red';
    }

}