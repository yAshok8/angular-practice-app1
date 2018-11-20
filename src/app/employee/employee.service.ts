import { Injectable } from '@angular/core'
import { IEmployee } from './employee'

@Injectable()
export class EmployeeService{

    getEmployees(): IEmployee[] {
        return [
            {code: 'emp001', name: 'Ashok Yadav', gender: 'Male', annualSalary: 600000, dateOfBirth: '07/20/1993' },
            //{code: 'emp002', name: 'Chetan Bhagat', gender: 'Male', annualSalary: 700000, dateOfBirth: '12/07/1983' },
            {code: 'emp003', name: 'Mumtaz Pandey', gender: 'Female', annualSalary: 400000, dateOfBirth: '06/27/1990' },
            //{code: 'emp004', name: 'Sridevi Kapoor', gender: 'Female', annualSalary: 200000, dateOfBirth: '11/26/1994' },
            // {code: 'emp005', name: 'Tulsidas Khan', gender: 'Male', annualSalary: 150000, dateOfBirth: '11/26/1994' },
            // {code: 'emp006', name: 'Babu Jalela', gender: 'Male', annualSalary: 500000, dateOfBirth: '11/31/1994' },
            // {code: 'emp007', name: 'Sania Mirza', gender: 'Female', annualSalary: 500000, dateOfBirth: '11/31/1994' },
        ];
    }
}