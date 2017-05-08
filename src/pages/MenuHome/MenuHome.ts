import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { listComponent } from '../List/List';
import { recentItemComponent } from '../Recent/Recent';
import { cartComponent } from '../cart/cart';

@Component({
	selector : 'MenuHomeComponent',
	templateUrl : 'MenuHome.html'
})

export class MenuHomeComponent{

	private tab1 = listComponent;
	private tab2 = recentItemComponent;

	constructor(
		private view : ViewController,
		private nav : NavController
	){
		
	}

	dismissPage(){
		this.view.dismiss();
	}

	goToCartPage(){
		this.nav.push(cartComponent);
	}

}