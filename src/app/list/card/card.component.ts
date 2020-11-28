import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/app/interfaces/item/item.interface';
import { ItemService } from 'src/app/services/item/item.service';

import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ListState } from 'src/app/models/list/list.redux';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  restaurants: IItem[];

  constructor( 
    private itemService: ItemService,
    private store: Store
  ) { }

  @Input() data;

  ngOnInit(): void {
    this.restaurants = [];
    this.initHttp();
  }

  async initHttp(): Promise<void> {
    const items = await this.itemService.getItems();
    this.restaurants = items;
  }

  

  @Select(ListState.getRating) rating$: Observable<number>;

}
