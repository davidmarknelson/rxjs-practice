import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickRaceRoutingModule } from './click-race-routing.module';
import { ClickRaceComponent } from './click-race.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ClickRaceComponent],
  imports: [
    CommonModule,
    ClickRaceRoutingModule,
    // Angular Material
    MatButtonModule
  ]
})
export class ClickRaceModule { }
