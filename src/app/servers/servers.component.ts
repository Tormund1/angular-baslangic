import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]'
  // selector: '.app-servers'
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'Oluşturulan servis yok!';
  serverName = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'server oluşturuldu, server adı: ' + this.serverName;
  }

}
