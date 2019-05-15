import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
     allowNewServer = false;
     serverCreationStatus = "No Server was Created";

     onCreateServer() {
      this.serverCreationStatus = "A server was created "
    }

    onUpdateServerName(event: any){
      
    }


  constructor() { 
       setTimeout(()=>{
        this.allowNewServer = true;    
       },2000)
  }

  ngOnInit() {
    
  }

}
