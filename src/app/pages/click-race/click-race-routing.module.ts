import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickRaceComponent } from './click-race.component';

const routes: Routes = [
  { path: '', component: ClickRaceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickRaceRoutingModule { }
