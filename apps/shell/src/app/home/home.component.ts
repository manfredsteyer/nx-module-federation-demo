// apps/shell/src/app/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@demo/auth-lib';
import { mfe1DomainLogic } from '@demo/mfe1/domain-logic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.login('Demo-User', '');
  }

}
