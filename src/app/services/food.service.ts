import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        id:1,
        price:10,
        name:'Chowmin',
        favorite: true,
        star:3.0,
        tags:['Fast Food','Junk Food'],
        imageUrl:'/assets/food1.jpg',
        cookTime:'40-50',
        origins:['india','kenya']
      },
      {
        id:2,
        price:10,
        name:'pizza',
        favorite: false,
        star:3.0,
        tags:['Fast Food','Junk Food'],
        imageUrl:'/assets/food2.jpg',
        cookTime:'40-50',
        origins:['india','kenya']
      },
      {
        id:3,
        price:10,
        name:'Burger',
        favorite: false,
        star:3.0,
        tags:['Fast Food','Junk Food'],
        imageUrl:'/assets/food3.jpg',
        cookTime:'40-50',
        origins:['india','kenya']
      },
      {
        id:4,
        price:10,
        name:'Ice cream',
        favorite: false,
        star:3.0,
        tags:['Fast Food','Junk Food'],
        imageUrl:'/assets/food4.jpg',
        cookTime:'40-50',
        origins:['india','kenya']
      },
      {
        id:5,
        price:10,
        name:'Cake',
        favorite: false,
        star:3.0,
        tags:['Fast Food','Junk Food'],
        imageUrl:'/assets/food5.jpg',
        cookTime:'40-50',
        origins:['india','kenya']
      },
      {
        id:6,
        price:10,
        name:'Egg',
        favorite: false,
        star:3.0,
        tags:['Fast Food','Junk Food'],
        imageUrl:'/assets/food6.jpg',
        cookTime:'40-50',
        origins:['india','kenya']
      },
      {
        id:7,
        price:10,
        name:'Salad',
        favorite: false,
        star:3.0,
        tags:['Fast Food','Junk Food'],
        imageUrl:'/assets/food7.jpg',
        cookTime:'40-50',
        origins:['india','kenya']
      },
      {
        id:8,
        price:10,
        name:'Pizza',
        favorite: false,
        star:3.0,
        tags:['Fast Food','Junk Food'],
        imageUrl:'/assets/food2.jpg',
        cookTime:'40-50',
        origins:['india','kenya']
      }
    ];
  }
}
