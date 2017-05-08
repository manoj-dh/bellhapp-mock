import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ViewController } from 'ionic-angular';

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
		private view : ViewController
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
			this.toggleDiv();
		}
	}

	dismissView(){
		this.view.dismiss();
	}

	toggleDiv(){
		if(this.isDivCollapsed == true){
			return this.unCollapseP();
		}
		return this.collapseP();
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