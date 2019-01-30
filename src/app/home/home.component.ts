import { AppTranslateService } from './../app-translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username = 'Guilherme Eduardo Bittencourt';

  constructor(private appTranslateService: AppTranslateService) { }

  ngOnInit() {
  }

  changePtLang() {
    this.appTranslateService.changeTranslate('pt-br');
  }

  changeEnLang() {
    this.appTranslateService.changeTranslate('en');
  }

  changeEsLang() {
    this.appTranslateService.changeTranslate('es');
  }
}
