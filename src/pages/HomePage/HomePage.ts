import { Component } from '@angular/core';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { AutoCompleteService } from 'ionic2-auto-complete';
import { NavController } from 'ionic-angular';

import { signalPageComponent } from '../SignalPage/SignalPage';

@Component({
	selector : 'homePageComponent',
	templateUrl : 'HomePage.html'
})
export class homePageComponent{

	private findService = new autoCompleteService();

	constructor(
		private nav : NavController
	){

	}

	searchbarChanged(){
		this.nav.push(signalPageComponent);
	}

}

class autoCompleteService implements AutoCompleteService{

	constructor(){}

	getResults(label){
		return ['Tuscano\'s Kitchen','Tuscany Palance','Tubs of Chicken'];
	}



}