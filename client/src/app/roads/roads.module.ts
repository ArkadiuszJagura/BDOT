import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoadCardComponent } from './road-card/road-card.component';
import { RoadFormComponent } from './road-form/road-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    RoadCardComponent,
    RoadFormComponent
  ],
  exports: [
    RoadCardComponent,
    RoadFormComponent
  ]
})
export class RoadsModule { }
