import { Injectable } from '@angular/core';
import { IItem } from 'src/app/interfaces/item/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: IItem[] = [
    {
      _id: '1',
      image: 'http://lorempixel.com/560/240/food/1',
      restaurant: 'Krispy Kreme',
      cost: 23,
      waitTime: '15-25 min',
      category: 'Postres',
      rating: 4.8,
    },
    {
      _id: '2',
      image: 'http://lorempixel.com/560/240/food/2',
      restaurant: 'San Sebastian',
      cost: 19,
      waitTime: '15-25 min',
      category: 'Panaderia',
      rating: 4.9,
    },
    {
      _id: '3',
      image: 'http://lorempixel.com/560/240/food/3',
      restaurant: 'KFC',
      cost: 21,
      waitTime: '15-25 min',
      category: 'Americana',
      rating: 4.4,
    },
    {
      _id: '4',
      image: 'http://lorempixel.com/560/240/food/4',
      restaurant: 'Chevewings',
      cost: 21,
      waitTime: '15-25 min',
      category: 'Alitas',
      rating: 4.6,
    },
    {
      _id: '5',
      image: 'http://lorempixel.com/560/240/food/5',
      restaurant: 'La ache',
      cost: 25,
      waitTime: '20-30 min',
      category: 'Mexicana',
      rating: 4.5,
    },
    {
      _id: '6',
      image: 'http://lorempixel.com/560/240/food/6',
      restaurant: 'Tacos Las Brazas',
      cost: 23,
      waitTime: '25-35 min',
      category: 'Mexicana',
      rating: 4.9,
    },
  ];

  constructor() {}

  getItems(): IItem[] {
    return this.items;
  }
}
