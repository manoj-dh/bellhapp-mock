import { Directive, ElementRef, Renderer2 } from '@angular/core';

declare var window : Window;

@Directive({
    selector : '[scroll-parent]',

})
export class scrollParent{

    private scrollDelegate : any;
    private defaultMargin : any = 0;

    private newMargin = 0;
    private newMarginBottom  = 0;

    constructor(public ele : ElementRef, private renderer : Renderer2){
    }

    ngOnInit(){

        let ele = this.ele.nativeElement.getElementsByClassName('scroll-content')[0];
        setTimeout(()=>{
            this.defaultMargin = this.ele.nativeElement.getElementsByClassName('scroll-content')[0].offsetTop;
            this.newMargin = this.defaultMargin;

            console.log(this.defaultMargin);
            console.log(this.newMargin);

        },500);
        let isBusy = false;

        ele.addEventListener('scroll',(event)=>{

            if(isBusy == true){
                console.log("Limit hitted");
                return false;
            }
            isBusy = true;
            
            let childEle = ele.getElementsByClassName('scroll-heading');
            if(childEle.length > 0){
                for(let i=0;i<childEle.length;i++){

                    let parentContentHeight = event.target.scrollHeight
                    let parentScrollAmount = event.target.scrollTop;
                    let parentActualHeight = event.target.offsetHeight;

                    let header = childEle[i];

                    let className = header.className;

                    let barTopPosition = header.previousElementSibling.offsetTop;
                    let barBottomPosition = header.nextElementSibling.offsetTop;

                    if(barTopPosition <= parentScrollAmount && !header.classList.contains('sticked-top')){
                        this.addToTop(header);
                    }else if(barBottomPosition > parentScrollAmount && header.classList.contains('sticked-top') ){
                        this.removeFromTop(header);
                    }

                    let newHeader = childEle[childEle.length - 1 - i];

                    className = newHeader.className;

                    barTopPosition = newHeader.previousElementSibling.offsetTop;
                    barBottomPosition = newHeader.nextElementSibling.offsetTop;

                    if(barBottomPosition  >= (parentActualHeight+parentScrollAmount)  && !newHeader.classList.contains('sticked-bottom')){
                        this.addToBottom(newHeader);
                    }else if(barTopPosition - parentScrollAmount  <= parentActualHeight && newHeader.classList.contains('sticked-bottom')){
                        this.removeFromBottom(newHeader);
                    } 
                }
            }

            isBusy = false;

        });

    }

    addToTop(ele : Element){
        let marginHost = this.ele.nativeElement.getElementsByClassName('scroll-content')[0];
        let oldMargin = this.newMargin;
        let marginToAdd = parseInt(window.getComputedStyle(ele).height); 
        this.newMargin += marginToAdd;
        this.renderer.setStyle(marginHost,'margin-top',(this.newMargin)+'px');
        marginHost.style.zIndex = null;
        this.makeElementTop(ele, oldMargin);
    }

    makeElementTop(ele,top){
        this.renderer.setStyle(ele,'position','fixed');
        this.renderer.setStyle(ele,'top',(top)+'px');
        this.renderer.setStyle(ele,'z-index',1);
        this.renderer.setStyle(ele,'width','100%');
        ele.classList.add('sticked-top');
    }

    removeFromTop(ele){
        let marginHost = this.ele.nativeElement.getElementsByClassName('scroll-content')[0];
        let oldMargin = this.newMargin;
        let marginToRemove = parseInt(window.getComputedStyle(ele).height);
        this.newMargin = this.newMargin - marginToRemove;
        this.renderer.setStyle(marginHost,'margin-top',(this.newMargin)+'px');
        this.removeExtraStyle(ele);
    }

    removeExtraStyle(ele){
        this.renderer.setAttribute(ele,"style","");
        ele.classList.remove('sticked-top');
        ele.classList.remove('sticked-bottom');
    }

    removeFromBottom(ele){
        let marginHost = this.ele.nativeElement.getElementsByClassName('scroll-content')[0];
        let oldMargin = this.newMarginBottom;
        let marginToRemove = parseInt(window.getComputedStyle(ele).height);
        this.newMarginBottom = this.newMarginBottom - marginToRemove;
        this.renderer.setStyle(marginHost,'margin-bottom',(this.newMarginBottom)+'px');
        this.removeExtraStyle(ele);
    }

    addToBottom(ele){
        let marginHost = this.ele.nativeElement.getElementsByClassName('scroll-content')[0];
        let oldMargin = this.newMarginBottom;
        let marginToAdd = parseInt(window.getComputedStyle(ele).height); 
        this.newMarginBottom += marginToAdd;
        this.renderer.setStyle(marginHost,'margin-bottom',(this.newMarginBottom)+'px');
        this.makeElementBottom(ele, oldMargin);
    }

    makeElementBottom(ele,bottom){
        this.renderer.setStyle(ele,'position','fixed');
        this.renderer.setStyle(ele,'bottom',(bottom)+'px');
        this.renderer.setStyle(ele,'z-index',1);
        this.renderer.setStyle(ele,'width','100%');
        ele.classList.add('sticked-bottom');
    }
    
}