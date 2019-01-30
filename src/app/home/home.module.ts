import { AppTranslateService } from './../app-translate.service';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule.forChild(),
    MatButtonModule,
    MatCardModule
  ],
  providers: [

  ]
})
export class HomeModule { }
