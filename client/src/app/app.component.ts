import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selected = {}
  edited = null

  select (road) {
    this.selected = road
    this.edited = Object.assign({}, road)
  }

  save() {
    console.log()
    Object.assign(this.selected, this.edited)
    this.reset()
  }

  reset() {
    this.selected = {}
    this.edited = null
  }

  cancel() {
    this.reset()
  }

  roads = [
    {
      id: 'gml_id',
      klasaDrogi: 'L',
      materialNawierzchni: 'Mb',
      category: '#00ff00',
      favourite: true
    },
    {
      id: 'gml_id',
      klasaDrogi: 'I',
      materialNawierzchni: 'Gr',
      category: '#00ff00',
      favourite: true
    }
  ]
}
