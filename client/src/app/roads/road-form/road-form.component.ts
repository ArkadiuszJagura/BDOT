import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-road-form',
  templateUrl: './road-form.component.html',
  styleUrls: ['./road-form.component.css']
})
export class RoadFormComponent {

  @Input()
  road = {}
  @Output('save')
  onSave = new EventEmitter()
  @Output('cancel')
  onCancel = new EventEmitter()
}
