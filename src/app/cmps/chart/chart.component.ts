import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() data
  @Input() columns
  // @Input() type
  constructor() { }
  // myData = [
  //   ['London', {v: 8136000, f: '8,1360'}],
  //   ['New York', {v: 8538000, f: '8,530'}]]
  // chartColumns = ['City', 'Inhabitants'];
  type = 'LineChart'
  ngOnInit(): void {
    console.log('this.data:', this.data)
  }

}
