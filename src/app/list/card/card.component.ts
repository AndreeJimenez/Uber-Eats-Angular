import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { InputAction } from 'src/app/models/list/list.redux';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor( private store: Store) { }

  @Input() data;

  ngOnInit(): void {
  }

  onClick() {
    console.log('click card')
  }

}
