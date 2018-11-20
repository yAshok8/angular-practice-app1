import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind1',
  templateUrl: './bind1.component.html',
  styleUrls: ['./bind1.component.css']
})

export class Bind1Component implements OnInit {

    inputString1:string = "";
    inputString2:string = "";
    btnClass:string = "bold-class italic-class";
    booleanClassVariable: boolean = true;

    boldclass: boolean = true;
    italicclass: boolean = true;

    //style binding variables
    isFontBold:boolean = true;
    fontSize:number = 20;

    //table hidden style property
    hideTr: boolean = false;

    //two way data binding properties
    name: string;

  constructor() { }

  ngOnInit() {
  }

  onKey1(event){
    this.inputString2=event.target.value;
  }

  onKey2(event){
    this.inputString1=event.target.value;
  }

  addClasses(){
    let classes = { 'bold-class': this.boldclass, 'italic-class' : this.italicclass};
    return classes;
  }

  addStyleClasses(){
    let fontStyleClasses = {'font-weight': this.isFontBold ? 'bold' : 'normal' , 'font-size.px': this.fontSize};
    return fontStyleClasses;
  }

  btnEvent():void{
    this.hideTr = !this.hideTr;
  }
}
