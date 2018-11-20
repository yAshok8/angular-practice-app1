import { Component, OnInit} from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit{

  employees: IEmployee[];

  selectedRadioButton:string = 'All';

  constructor(private _employeeService: EmployeeService)  {}

  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
    console.log(this.employees.length);
  }

  getTotalEmployees(): number{
    return this.employees.length;
  }

  getTotalMaleEmployees(): number{
    return this.employees.filter( e => e.gender === 'Male').length;
  }

  getTotalFemaleEmployees(): number{
    return this.employees.filter( e => e.gender === 'Female').length;
  }

  changedSelectionFunction(eventPayload: string):void{
    this.selectedRadioButton = eventPayload; 
  }

}
