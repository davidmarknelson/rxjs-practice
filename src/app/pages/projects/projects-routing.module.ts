import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from "./projects.component";


const routes: Routes = [
  { path: '', component: ProjectsComponent},
  { path: 'click-race', loadChildren: () => import('../click-race/click-race.module').then(m => m.ClickRaceModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
