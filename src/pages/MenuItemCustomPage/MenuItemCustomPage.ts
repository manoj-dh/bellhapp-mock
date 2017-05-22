import { Component } from '@angular/core';


@Component({
	selector : 'menuItemCustomPageComponent',
	templateUrl : 'MenuItemCustomPage.html'
})
export class menuItemCustomPageComponent{

	private data : any = {};

	constructor(){
		this.setData();
	}

	setData(){

		this.data = [
			{
				name : 'Size',
				type : 'OPTION_CHOOSE',
				options : [
					{
						name : 'Small',
						is_default : 0,
						value : 8.99
					},
					{
						name : 'Medium',
						is_default : 1,
						value : 8.99
					},
					{
						name : 'Large',
						is_default : 0,
						value : 10.99
					},
				]
			},
			{
				name : 'Toppings',
				type : 'OPTION_ADD',
				options : [
					{
						name : 'Pepperon',
						is_default : 0,
						value : 1
					},
					{
						name : 'Chicken',
						is_default : 0,
						value : 1
					},
					{
						name : 'Extra cheese',
						is_default : 0,
						value : 1
					},
				]
			},
			{
				name : 'Sides',
				type : 'OPTION_ADD',
				options : [
					{
						name : 'Eroceol',
						is_default : 0,
						value : 2
					},
					{
						name : 'Freies Fries',
						is_default : 1,
						value : 3
					},
					{
						name : 'Salad',
						is_default : 0,
						value : 2
					},
					{
						name : 'Soup',
						is_default : 0,
						value : 1
					},
					{
						name : 'Cheese Breez',
						is_default : 0,
						value : 2
					},
					{
						name : 'Patato',
						is_default : 0,
						value : 2
					},
				]
			}
		];

	}

}