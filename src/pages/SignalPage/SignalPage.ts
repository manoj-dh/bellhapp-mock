import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuHomeComponent } from '../MenuHome/MenuHome';
import { cartComponent } from '../cart/cart';

@Component({
	selector: 'signalPageComponent',
	templateUrl: 'SignalPage.html'
})
export class signalPageComponent{

	constructor(
		public nav : NavController
	){
	}

	goToMenuHome(){
		this.nav.push(MenuHomeComponent);
	}

	openCartScreen(){
		this.nav.push(cartComponent);
	}


}
