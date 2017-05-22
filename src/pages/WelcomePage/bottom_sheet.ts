import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
	selector : 'bottomSheetComponent',
	templateUrl : 'bottom_sheet.html'
})
export class bottomSheetComponent{


	constructor(
		private view : ViewController
	){
		
	}

	goToHomePage(){
		this.view.dismiss('home');
	}


}