import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector : 'cartComponent',
    templateUrl : 'cart.html'
})
export class cartComponent{

    constructor(
        private view : ViewController
    ){
        
    }

    dismissPage(){
        this.view.dismiss();
    }

}