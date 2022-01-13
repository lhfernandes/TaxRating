import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SegmentComponent } from './segment/segment/segment.component';
import { ListSegmentsComponent } from './segments/list-segments/list-segments.component';
import { SegmentService } from './share/services/segment/segment.service';
import { TaxRatingService } from './share/services/tax-rating/tax-rating.service';
import { AppPrimeNgModule } from './app.prime-ng-module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SegmentComponent,
    ListSegmentsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppPrimeNgModule    
  ],
  providers: [SegmentService,TaxRatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
