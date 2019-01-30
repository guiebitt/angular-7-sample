import { AppTranslateService } from './app-translate.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menu = new Array({
    name: 'Home',
    icon: 'home',
    route: '/home'
  });

  constructor(
    private router: Router,
    private appTranslateService: AppTranslateService) { }

  ngOnInit(): void {
    this.appTranslateService.initializeTranslate();
  }

  go(route: string) {
    this.router.navigate([route]);
  }
}
