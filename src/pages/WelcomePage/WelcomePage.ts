import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { ModalController, Modal, NavController } from 'ionic-angular';
import { bottomSheetComponent } from './bottom_sheet';

import { homePageComponent } from '../HomePage/HomePage';

@Component({
	selector : 'welcomePageComponent',
	templateUrl : 'WelcomePage.html',
	animations : [
		trigger('slideUp',[
			state('opened',style({
				'max-height' : '*'
			})),
			state('closed',style({
				'max-height' : '0px'
			})),
			transition('* => opened', [
				style({height: '0px'}),
      			animate(1000, style({'max-height': '*'}))
			]),
			transition('opened => closed', [
				style({height: '*'}),
      			animate(1000, style({'max-height': '0px'}))
			])
		])
	]
})
export class welcomePageComponent{



	private test : any = "closed";
	private md : Modal;
	private isOpened = false;

	constructor(
		private modal : ModalController,
		private nav : NavController
	){
		this.md = this.modal.create(bottomSheetComponent,{},{
			cssClass:'cModal',
			enableBackdropDismiss : false,
			showBackdrop : false,
		});
	}

	pageClick(){
		this.md.dismiss();
	}

	openModal($event : Event){
		$event.stopPropagation();
		this.md.present();
		this.md.onDidDismiss((data)=>{
			if(data && data == 'home'){
				this.nav.push(homePageComponent);
			}
		});
	}

	closeModal(){
		this.md.dismiss();
	}

}