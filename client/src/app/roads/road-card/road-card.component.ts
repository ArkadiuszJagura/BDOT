import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-road-card',
  templateUrl: './road-card.component.html',
  styleUrls: ['./road-card.component.css']
})
export class RoadCardComponent {

  @Input()
  road = {}
  @Input()
  isSelected = false
  @Output('selected')
  onSelect = new EventEmitter()

  get materialNawierzchniStyle() {
    return { color: 'gray', letterSpacing: '2px'}
  }

  select() {
    this.onSelect.emit(this.road)
  }
}
