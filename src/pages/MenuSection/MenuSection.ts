import { Component } from '@angular/core';
import { NavParams, ViewController, NavController } from 'ionic-angular';
import { scrollParent } from '../../directive/scroll';

import { cartComponent } from '../cart/cart';
import { detailComponent } from '../detail/detail';

@Component({
	selector : 'MenuSectionsComponent',
	templateUrl : 'MenuSection.html'
})
export class MenuSectionsComponent{

	private title : "";

	private data : any;
	private images : any;
	private myList : Array<any> = new Array<any>();

	constructor(
		private params : NavParams,
		private view : ViewController,
		private nav : NavController
	){
		this.title = this.params.data.name;
		this.images = [
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Featured Specials/Beverages/Flavored Italian Sodas/52293418-1008-11e7-b8df-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Featured Specials/Entrees/Prime Rib Sandwich/f347b975-49f8-49fc-96e3-d97f5dd0c062.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Featured Specials/Desserts/Chocolate Elegance/16df9009-f406-44e7-8051-9dea6ca56a95.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Red Wines/Angeline Pinot Noir/59401002-1001-11e7-9b9c-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Red Wines/Ste. Michelle Indian Wells Merlot/3e1a7c88-1004-11e7-a387-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Red Wines/Dunham Three Legged Red/012f11f6-1006-11e7-bcf0-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Red Wines/Tormarasca Neprica Red Blend/3f76ebbc-101c-11e7-b763-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Red Wines/Gordan Syrah/5a8d9ffa-1007-11e7-a55e-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Red Wines/Red Cedar Vineyard Clayhouse Cabernet/a5f1efea-1017-11e7-b931-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Red Wines/Columbia Crest Grand Estates Cabernet/039d5368-1005-11e7-957e-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Red Wines/Francis Coppola Director's Cut Cabernet/fcabc682-1006-11e7-a391-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Signature Wines/Rombauer Chardonnay/b80a693c-1017-11e7-8f3c-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Signature Wines/Ruffino Santedame Chianti Classico DOCG/a4bd2f9e-1018-11e7-984b-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Signature Wines/King Estate Pinot Noir/a3ade022-1008-11e7-a390-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Signature Wines/Northstar Merlot/bedfae74-1009-11e7-8b72-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Signature Wines/Luke Cabernet/fe9a0ac4-1008-11e7-a993-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Signature Wines/Ste. Michelle Cold Creek Cabernet Sauvignon/2198a918-1004-11e7-a934-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Signature Wines/Dusted Valley Cabernet/1e921680-1006-11e7-a75c-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/House Wines/House Pinot Grigio/b4aa0fbe-1007-11e7-8891-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Beers On Tap/Schofferhofer/ced062a6-1018-11e7-8f9a-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Beers On Tap/Blue Moon/a178372c-1002-11e7-8622-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Beers On Tap/Stella Artois/bc7a1aea-101b-11e7-8b20-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Beers On Tap/Black Butte Porter/6d42866a-1002-11e7-b6d4-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Bottled Beers/Corona/51e96e30-1005-11e7-83e8-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Cocktails/Salted Caramel Martini/ba8c8752-1018-11e7-8051-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Cocktails/Amalfi Lemonade/1e4ccd32-1001-11e7-ac45-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Cocktails/Chocolate Espresso Martini/c70b1c0a-1004-11e7-af54-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Cocktails/Pineapple Pompeii/628bb448-1017-11e7-b170-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Cocktails/Pomegranate Martini/77a920ae-1017-11e7-8c9a-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Cocktails/Dave's Raspberry Lemon Drop/7bd4c9ba-1005-11e7-b537-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Cocktails/Perfect Maker's Manhattan/ef331d86-1009-11e7-975d-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Cocktails/Limoncello Martini/d1a515d6-1008-11e7-b238-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Cocktails/Italian Margarita/3dafb4a8-1008-11e7-80ca-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Cocktails/Tuscano's Sangria/a84d83a8-101c-11e7-b0f2-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Drinks/Non-Alcoholic/Flavored Italian Sodas/52293418-1008-11e7-b8df-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Lunch Deals!/Soup, Salad & Focaccia Bread/5e36d9aa-101b-11e7-8b29-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Lunch Deals!/Mamma's Mac and Cheese/4a08e81f-bf40-4feb-88ea-06dec9eaa854.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Lunch Deals!/Mamma's Mac and Cheese/5300cb77-866f-462e-b0cf-47b8c13a2e9b.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Lunch Deals!/Mamma's Mac and Cheese/22816a77-7362-4499-a636-e3f6f89dbcae.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Lunch Deals!/Pasta Special!/d9d05a26-1009-11e7-8066-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Lunch Deals!/Tuscano's Pizza Special/9100487a-101c-11e7-a4ca-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Lunch Deals!/Cheese Ravioli/987d5592-1004-11e7-bcaf-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Lunch Deals!/Eight Layer Lasagna/a1812ae6-bc96-4cd1-b86c-46ef757b636d.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Burgers & Sandwiches/Bacon Cheeseburger/b7df2f44-1001-11e7-b01e-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Burgers & Sandwiches/Portobello Mushroom Burger/8e997dd6-1017-11e7-bdbb-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Burgers & Sandwiches/Gorgonzola Burger/760211e4-1007-11e7-a6d0-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Burgers & Sandwiches/Prime Rib Dip/f347b975-49f8-49fc-96e3-d97f5dd0c062.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Burgers & Sandwiches/Italian Club/2826d0bc-1008-11e7-ba6a-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Burgers & Sandwiches/Meatball Sandwich/31332f88-1009-11e7-8387-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Soups & Salads/Greek Salad/031f4b7e-46cb-4548-a8bc-4965461bdd11.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Soups & Salads/Greek Salad/8687ae5f-0b0c-4a20-9e57-3147077c4567.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Soups & Salads/Italian Cobb/3cb382f2-8bc0-4439-a225-2a39c38597d6.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Soups & Salads/Italian Cobb/e8b315b2-7c6f-4ac9-94a1-5d65b3fe3862.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Soups & Salads/Tuscano's Caesars!/ed0cc041-72ef-4168-b4dd-d627f7474d68.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Soups & Salads/Tuscano's Chopped Salad/cd72d2a1-cae0-4d7e-a2af-9e1d6fb1c265.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Soups & Salads/Apple Walnut Insalata/8f774795-c971-49ea-9e00-ae360d19cd4b.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Soups & Salads/Soup of the Day/1f497392-101b-11e7-a5af-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Soups & Salads/Zuppa di Minestrone/a341547c-fa74-409f-ab48-f4ed5b8d3a7b.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Tuscano's Classics/Chicken Parmesan/b0cde972-1004-11e7-9ead-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Tuscano's Classics/Spicy Shrimp Putanesca/e3f3e959-0a9f-4f12-ab85-47e5cc4aa102.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Tuscano's Classics/Salmon Picatta/0d580c7e-5b66-49ab-9e5a-f2611d582f1b.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Tuscano's Classics/Salmon Picatta/9a1ca3ef-2b02-45e9-9d50-ab1cdd05299d.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Tuscano's Classics/Tuscano's Chicken Carbonara/ba7d7d04-dbed-4305-a87c-a4fafa8c7b9f.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Tuscano's Classics/Steak Marsala/a631f2dc-2021-4a24-ab80-6d939c62de3e.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Tuscano's Classics/Pollo Con Fresca/7ce6e6c5-1069-4ae6-9dec-1b78c00a3e84.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Tuscano's Classics/Cajun Chicken Pasta/6c1d9f0b-a1c2-44f7-ae18-cb6d123b48d5.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Tuscano's Classics/Cajun Chicken Pasta/22879099-d7a0-462d-bcab-5f992e033f51.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Brick Oven Pizzas/The Godfather/75d38d46-f6f3-441c-9fd4-f1ab39df2559.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Brick Oven Pizzas/Big Kahuna/4a00b852-1002-11e7-80b7-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Brick Oven Pizzas/Meat Lovers' Pizza/88592375-035b-4579-aa73-858ed9377ae2.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Brick Oven Pizzas/The Greek/0e679fa9-14b3-4364-9047-013339ffafaf.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Brick Oven Pizzas/Pepperoni/c508903e-235a-4b88-be91-cc2ea39bda7a.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Brick Oven Pizzas/Arrabiatta/274cded0-eabf-47e5-9bc8-8f3a952f6239.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Brick Oven Pizzas/Garden Fresh Pizza/3c96af32-1007-11e7-826f-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Brick Oven Pizzas/Margherita/cd80825e-bcfb-4710-9be1-03bca739333f.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Brick Oven Pizzas/BBQ Chicken/26bf7fcf-7fd8-4fb0-abee-e8dec99c8adb.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Brick Oven Pizzas/Cheese Pizza!/6475adf8-1004-11e7-866a-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Appetizers/Piccante Italian Wings/1b1409a1-a837-49ac-b0de-9e8cfebf01ee.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Appetizers/Crispy Fried Raviolis/329df30a-d281-4bd9-9686-0eab3f44f6d1.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Appetizers/Garlic Cheese Bread/fe5f2dab-1f01-437e-ae3d-158882074534.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Appetizers/Tomato Bruschetta/fefd8981-cfba-4243-95ab-7dcdb8d9531a.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Appetizers/Spinach Artichoke Dip/1c6c9cf8-b7cf-4371-b83d-7cbdead52bf1.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Appetizers/Crispy Calamari/5609c5b8-8518-403e-aa96-a06c52309ea5.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Appetizers/Corn Fritters/bb931372-1570-4868-8eff-efca04f5cb9a.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Appetizers/Tuscano's Caprese/025680b8-dca2-4469-88de-798c7d8a3aed.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Appetizers/Hand-Made Fried Mozzarella/f0daf551-7eca-45fc-a773-eda01c6867aa.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Lunch/Appetizers/Butter Clams/a4c25904-0cd2-4b4a-8496-e5e32a9980c4.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Fresh Baked Focaccia Bread/784e28f3-f6a5-43fc-a8e1-fec56d702dfa.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Tasty Trio/dc490f98-76f3-4b8d-af8a-dae08f6820d2.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Piccante Italian Wings/1b1409a1-a837-49ac-b0de-9e8cfebf01ee.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Crispy Fried Raviolis/329df30a-d281-4bd9-9686-0eab3f44f6d1.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Garlic Cheese Bread/fe5f2dab-1f01-437e-ae3d-158882074534.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Tomato Bruschetta/fefd8981-cfba-4243-95ab-7dcdb8d9531a.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Spinach Artichoke Dip/1c6c9cf8-b7cf-4371-b83d-7cbdead52bf1.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Crispy Calamari/5609c5b8-8518-403e-aa96-a06c52309ea5.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Corn Fritters/bb931372-1570-4868-8eff-efca04f5cb9a.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Tuscano's Caprese/025680b8-dca2-4469-88de-798c7d8a3aed.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Large Basket of Sidewinder Fries/01f3e102-8544-4341-8c38-ae02dc2f6f4c.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Hand-Made Fried Mozzarella/f0daf551-7eca-45fc-a773-eda01c6867aa.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Appetizers/Butter Clams/a4c25904-0cd2-4b4a-8496-e5e32a9980c4.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Soups & Salads/Greek Salad/031f4b7e-46cb-4548-a8bc-4965461bdd11.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Soups & Salads/Greek Salad/8687ae5f-0b0c-4a20-9e57-3147077c4567.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Soups & Salads/Italian Cobb/3cb382f2-8bc0-4439-a225-2a39c38597d6.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Soups & Salads/Italian Cobb/e8b315b2-7c6f-4ac9-94a1-5d65b3fe3862.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Soups & Salads/Tuscano's Caesars!/ed0cc041-72ef-4168-b4dd-d627f7474d68.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Soups & Salads/Tuscano's Chopped Salad/cd72d2a1-cae0-4d7e-a2af-9e1d6fb1c265.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Soups & Salads/Apple Walnut Insalata/8f774795-c971-49ea-9e00-ae360d19cd4b.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Soups & Salads/Zuppa di Minestrone/a341547c-fa74-409f-ab48-f4ed5b8d3a7b.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Brick Oven Pizzas/The Godfather/75d38d46-f6f3-441c-9fd4-f1ab39df2559.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Brick Oven Pizzas/Big Kahuna/4a00b852-1002-11e7-80b7-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Brick Oven Pizzas/Meat Lovers' Pizza/88592375-035b-4579-aa73-858ed9377ae2.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Brick Oven Pizzas/The Greek/0e679fa9-14b3-4364-9047-013339ffafaf.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Brick Oven Pizzas/Pepperoni/c508903e-235a-4b88-be91-cc2ea39bda7a.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Brick Oven Pizzas/Arrabiatta/274cded0-eabf-47e5-9bc8-8f3a952f6239.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Brick Oven Pizzas/Garden Fresh Pizza/3c96af32-1007-11e7-826f-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Brick Oven Pizzas/Margherita/cd80825e-bcfb-4710-9be1-03bca739333f.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Brick Oven Pizzas/BBQ Chicken/26bf7fcf-7fd8-4fb0-abee-e8dec99c8adb.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Brick Oven Pizzas/Cheese Pizza!/6475adf8-1004-11e7-866a-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Italian Classics/Chicken Saltimbocca/f0e335e3-3884-46e4-8e71-d28710711870.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Italian Classics/Tuscano's Parmesana!/1c5ef75c-9978-49d7-8ff0-9aa0ae98f4d1.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Italian Classics/New York Strip Steak/5f7008e2-351f-4411-a742-e676210cf970.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Italian Classics/Salmon Picatta/0d580c7e-5b66-49ab-9e5a-f2611d582f1b.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Italian Classics/Salmon Picatta/9a1ca3ef-2b02-45e9-9d50-ab1cdd05299d.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Italian Classics/Steak Marsala/a631f2dc-2021-4a24-ab80-6d939c62de3e.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Italian Classics/Pollo Con Fresca/7ce6e6c5-1069-4ae6-9dec-1b78c00a3e84.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Mamma's Mac and Cheese/4a08e81f-bf40-4feb-88ea-06dec9eaa854.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Mamma's Mac and Cheese/5300cb77-866f-462e-b0cf-47b8c13a2e9b.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Mamma's Mac and Cheese/22816a77-7362-4499-a636-e3f6f89dbcae.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Eight Layer Lasagna/a1812ae6-bc96-4cd1-b86c-46ef757b636d.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Spicy Shrimp Putanesca/e3f3e959-0a9f-4f12-ab85-47e5cc4aa102.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Tuscano's Chicken Carbonara/ba7d7d04-dbed-4305-a87c-a4fafa8c7b9f.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Cajun Chicken Pasta/6c1d9f0b-a1c2-44f7-ae18-cb6d123b48d5.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Cajun Chicken Pasta/22879099-d7a0-462d-bcab-5f992e033f51.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Traditional Spaghetti/15e25f5f-30b3-4b7b-a5b6-d3a1ca55afab.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Clams Linguine/f621a673-8bdd-4591-ae39-8dbb3fd41f35.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Raviolis!/6c523ad8-7359-4b98-8ac9-8ef42e0a9dce.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Raviolis!/185af218-079a-46fd-8b3a-58eec6af0c66.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Raviolis!/e7df1ddf-3056-4779-8f34-46f1b047caf7.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Fettuccine Alfredo/87ed03bb-d5df-4f19-aa1f-2c6874203cfd.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Fettuccine Alfredo/6d8be9fa-9a7b-4112-a774-3084f8f1d741.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Seafood Linguine/5ba3cd00-5992-4d2d-97e2-82330c8e3283.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Seafood Canneloni/91084523-7932-4813-92cb-72503bb4c053.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Pastas/Tuscano's Italian Trio/b7f8071b-7333-45e6-9f90-ae111c1e75cf.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Sides/Seasonal Vegetables/0cba4ad2-1019-11e7-a566-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Sides/Large Basket of Sidewinder Fries/01f3e102-8544-4341-8c38-ae02dc2f6f4c.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Sides/Grilled Asparagus/ecf3cb1f-40e2-4858-9110-64791d724cd9.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Sides/Bowl of Tuscano's Homemade Soup/142778a0-1003-11e7-a827-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Kids/Fried Cheese Raviolis/adacf209-23f8-4e0b-a47d-7a0c8f3bc7f8.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Kids/Crazy Creamy Pasta/2ae983fe-df1a-4808-9044-0492008fe444.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Kids/Spaghetti with a Jumbo Meatball/f1db403e-c6c3-44af-9e56-d3e1e6bdf6dd.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Kids/Mac & Cheezy/00bdf2b3-7010-4f49-987b-ed51de77b18c.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Dinner/Kids/Mio Pizza/8b36520d-e5bb-4a2c-8d52-82ff13308b06.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Entrees/Gluten-Free Tusano's Spaghetti/15e25f5f-30b3-4b7b-a5b6-d3a1ca55afab.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Entrees/Gluten-Free Fettuccine Alfredo/6d8be9fa-9a7b-4112-a774-3084f8f1d741.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Entrees/Gluten-Free Chicken Carbonara/ba7d7d04-dbed-4305-a87c-a4fafa8c7b9f.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Entrees/Gluten-Free Clams Linguine/f621a673-8bdd-4591-ae39-8dbb3fd41f35.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Entrees/Gluten-Free Spicy Shrimp Putanesca/e3f3e959-0a9f-4f12-ab85-47e5cc4aa102.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Entrees/Gluten-Free Chicken Saltimbocca/f0e335e3-3884-46e4-8e71-d28710711870.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Entrees/Gluten-Free Pollo Con Fresca/7ce6e6c5-1069-4ae6-9dec-1b78c00a3e84.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Entrees/Gluten-Free Seafood Linguine/5ba3cd00-5992-4d2d-97e2-82330c8e3283.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Entrees/Gluten-Free Salmon Picatta/0d580c7e-5b66-49ab-9e5a-f2611d582f1b.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Entrees/New York Strip Steak/5f7008e2-351f-4411-a742-e676210cf970.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Pizza/Gluten-Free Arrabbiatta/274cded0-eabf-47e5-9bc8-8f3a952f6239.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Pizza/Gluten-Free BBQ Chicken/26bf7fcf-7fd8-4fb0-abee-e8dec99c8adb.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Pizza/Gluten-Free Meat Lovers' Pizza/88592375-035b-4579-aa73-858ed9377ae2.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Pizza/Gluten-Free Margherita/cd80825e-bcfb-4710-9be1-03bca739333f.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Pizza/Gluten-Free The Godfather/75d38d46-f6f3-441c-9fd4-f1ab39df2559.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Pizza/Gluten-Free Big Kahuna/4a00b852-1002-11e7-80b7-28cfe91e4031.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Pizza/Gluten-Free The Greek/0e679fa9-14b3-4364-9047-013339ffafaf.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Gluten-Free/Pizza/Gluten-Free Pepperoni/c508903e-235a-4b88-be91-cc2ea39bda7a.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Desserts/Main/Tiramisu/7a7779d1-d863-47d2-bf0a-011a4c202961.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Desserts/Main/Molten Chocolate Cake/1a9288e8-75c5-4f68-ba7e-0a0d925acab5.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Desserts/Main/Ice Cream/8d830dcb-b2ff-414c-bb87-cb4a173061c5.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Desserts/Main/Sweet Cannoli's/3b2ff5c0-10ea-11e7-b776-0f056c734c45.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Desserts/Main/New York Style Cheesecake/9799cc00-10ea-11e7-aa4a-fb6c465a031e.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Desserts/Main/Vanilla Bean Panna Cotta/c602e680-10ea-11e7-bc0a-c7862742a614.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Bar Bites/Main/Focaccia Bread with Dipping Oil/784e28f3-f6a5-43fc-a8e1-fec56d702dfa.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Bar Bites/Main/Garlic Cheese Bread/fe5f2dab-1f01-437e-ae3d-158882074534.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Bar Bites/Main/Tomato Bruschetta/d5e44080-1b0d-11e7-a428-951c807fcbf9.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Bar Bites/Main/Corn Fritters/a8f717a0-1b0d-11e7-9534-83f77d18b386.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Bar Bites/Main/Crispy Calamari/daf646a0-1b0c-11e7-8e6d-f33c9eef1d31.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Bar Bites/Main/Hand-made Fried Mozzarella/9828d5e0-1b0c-11e7-9af4-bb43e2aadd9e.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Bar Bites/Main/Piccante Italian Wings/62941980-1b0c-11e7-b388-93922a3ae48c.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Bar Bites/Main/Spaghetti with Marinara/15e25f5f-30b3-4b7b-a5b6-d3a1ca55afab.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Bar Bites/Main/Brick Oven Baked Pizza/69b4db60-1b0b-11e7-a8ba-1df21bc830de.jpg",
			"https://s3-us-west-2.amazonaws.com/bellhapp-restaurant-images/392ef300-02af-11e7-a6df-fd7f179c03ec/Bar Bites/Main/Fried Raviolis/625b87e0-1b0d-11e7-b1b7-63a42fd93a7e.jpg"
		];
		this.generateRandomList();
	}

	generateRandomList(){
		this.myList = [{
			heading : "Appetizers",
			items : [{
				title : "1",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "2",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "3",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "4",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			}]
		},{
			heading : "Brick Oven Pizzas",
			items : [{
				title : "1",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "2",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "3",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "4",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			}]
		},{
			heading : "Italian",
			items : [{
				title : "1",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "2",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "3",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "4",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "1",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "2",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "3",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "4",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			}]
		},{
			heading : "Pastas",
			items : [{
				title : "1",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "2",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "3",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "4",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			}]
		},{
			heading : "Soups & Salads",
			items : [{
				title : "1",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "2",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "3",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			},{
				title : "4",
				description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image : this.getRandomImage()
			}]
		}];
	}

	dismissPage(){
		this.view.dismiss();
	}

	getRandomImage(){
		let index = Math.floor(Math.random()*this.images.length+1);
		return this.images[index];
	}

	openCartScreen(){
		this.nav.push(cartComponent);
	}

	goToDetailPage(){
		this.nav.push(detailComponent);
	}


}