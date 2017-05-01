import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// bellhapp
import { Config } from './config';
import { Socket } from './socket';
import { Environment } from './environment';

import * as _ from 'lodash';
import data from './data.json';
import cart from './cart.json';

@Injectable()
export class Restaurant {
  public data: string;
  private apiUrl: string;
  public items: any[];
  public menus: any;
  public cart: any[];
  public introScreens: any[];

  constructor(
  ) {
    this.cart = cart;
    console.log(data);
    this.data = data[0];
    this.menus = data[2][0];
    this.items = data[1];
    this.introScreens = data[2][1];
    console.log('restaurant data:');
    console.log(this.data);
    console.log('restaurant menus');
    console.log(this.menus);
    console.log('restaurant menu items');
    console.log(this.items);
    console.log('restaurant intro screen data');
    console.log(this.introScreens);
  }

  getMenuItem(itemId: string) {
    if (itemId === '-1') {
      return {
        name: 'Water',
        id: '-1'
      }
    } else {
      return this.items[itemId];
    }
  }

  getMenu(menu: string) {
    return _.map(this.menus[menu], (itemId) => {
      return this.items[itemId];
    });
  }
}
