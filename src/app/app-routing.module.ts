import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SegmentComponent } from './segment/segment/segment.component';
import { ListSegmentsComponent } from './segments/list-segments/list-segments.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'segment/:id', component: SegmentComponent },
  { path: 'list-segments', component: ListSegmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
