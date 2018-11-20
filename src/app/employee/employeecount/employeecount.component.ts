import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeecount',
  templateUrl: './employeecount.component.html',
  styleUrls: ['./employeecount.component.css']
})

export class EmployeecountComponent implements OnInit {

  selectedRadioButtonVal:string = 'All';

  @Input()
  all:number;

  @Input()
  mens:number;

  @Input()
  womens:number;

  @Output()
  radioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  radioButtonChangedEventFunction():void{
    this.radioButtonSelectionChanged.emit(this.selectedRadioButtonVal);
  }
}
