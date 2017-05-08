import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuSectionsComponent } from '../MenuSection/MenuSection';


@Component({
	selector : 'listComponent',
	templateUrl : 'List.html'
})
export class listComponent{

	private list : Array<any> = new Array<any>();
	private parentNav : NavController;

	constructor(
		private nav : NavController
	){
		this.parentNav = this.nav.parent.parent;
		this.list.push({
			name : "Featured Special",
			bg : "url('assets/images/dish-1.jpg')"
		});
		this.list.push({
			name : "Dinner",
			bg : "url('assets/images/dish-2.jpg')"
		});
		this.list.push({
			name : "Launch",
			bg : "url('assets/images/dish-3.jpg')"
		});
		this.list.push({
			name : "Drinks",
			bg : "url('assets/images/dish-4.jpg')"
		});
	}

	goToMenuSectionComponent(listItem){
		this.parentNav.push(MenuSectionsComponent, listItem);
	}

}