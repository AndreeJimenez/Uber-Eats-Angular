import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ListState } from 'src/app/models/list/list.redux';

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.scss']
})
export class ListTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  keypad = [
    [7, 8, 9, '/'],
    [4, 5, 6, '*'], 
    [1, 2, 3, '-'],
    ['C', 0, '+', '=']
  ]

  @Select(ListState.getResult) result$: Observable<number>;

}
