import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Bind1Component } from './bind1/bind1.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeecountComponent } from './employee/employeecount/employeecount.component';
import { CountrycitydropdownComponent } from './countrycitydropdown/countrycitydropdown.component';
import { CitiesComponent } from './countrycitydropdown/cities/cities.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ObservabledemoComponent } from './observabledemo/observabledemo.component'

import { CountryService } from './services/country.service';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { PatientComponent } from './patientlist/patient/patient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Bind1Component,
    EmployeeComponent,
    EmployeecountComponent,
    CountrycitydropdownComponent,
    CitiesComponent,
    LifecyclehooksComponent,
    ObservabledemoComponent,
    PatientlistComponent,
    PatientComponent
 ],
  imports: [
    BrowserModule, FormsModule, HttpModule, HttpClientModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})

export class AppModule { }
