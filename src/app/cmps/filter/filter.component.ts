import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() setFilter = new EventEmitter()
  constructor() { }
  filterBy = {
    term: ''
  }
  ngOnInit(): void {
  }


}
