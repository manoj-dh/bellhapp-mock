import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { menuItemCustomPageComponent } from '../MenuItemCustomPage/MenuItemCustomPage';

declare var window : Window;

@Component({
	selector : 'detailComponent',
	templateUrl : 'detail.html'
})
export class detailComponent{

	@ViewChild('itemDetails') itemDetail : ElementRef;

	private isPOverflow = false;
	private collapsedHeight = 0;
	private isDivCollapsed = false;

	constructor(
		private renderer : Renderer2,
		private view : ViewController,
		private nav : NavController
	){

	}

	ionViewDidLoad(){
		let lineToShow = 3;
		let height = this.itemDetail.nativeElement.offsetHeight;
		//let lineHeight = Math.ceil(parseInt(window.getComputedStyle(this.itemDetail.nativeElement).fontSize)*1.4);
		let lineHeight = 16;
		let numberOfLines = parseInt(height/lineHeight+'');
		this.collapsedHeight = lineHeight * lineToShow ;
		if(numberOfLines > lineToShow){
			this.isPOverflow = true;
			this.toggleDiv(null);
		}
	}

	dismissView(){
		this.view.dismiss();
	}

	toggleDiv($event : Event){
		if($event){
			$event.stopPropagation();
		}
		if(this.isDivCollapsed == true){
			return this.unCollapseP();
		}
		return this.collapseP();
	}

	goToCustomMenuItem(){
		this.nav.push(menuItemCustomPageComponent);
	}

	private collapseP(){
		this.renderer.setStyle(this.itemDetail.nativeElement,'height',this.collapsedHeight+'px');
		this.isDivCollapsed = true;
	}

	private unCollapseP(){
		this.renderer.removeStyle(this.itemDetail.nativeElement,'height');
		this.isDivCollapsed = false;
	}

	checkForOverflow(){

	}

}