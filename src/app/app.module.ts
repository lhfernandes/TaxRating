import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule} from 'primeng/table';
import { SegmentComponent } from './segment/segment/segment.component';
import { AppRoutingModule } from './app-routing.module';
import { ListSegmentsComponent } from './segments/list-segments/list-segments.component';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import { SegmentService } from './share/services/segment/segment.service';
import { TaxRatingService } from './share/services/tax-rating/tax-rating.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SegmentComponent,
    ListSegmentsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    AppRoutingModule,
    DialogModule,
    ReactiveFormsModule,
    CheckboxModule,
    AutoCompleteModule,
    CardModule,
    InputNumberModule
  ],
  providers: [SegmentService,TaxRatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
