import { Component, OnInit } from '@angular/core';
import { ICountry } from '../models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-countrycitydropdown',
  templateUrl: './countrycitydropdown.component.html',
  styleUrls: ['./countrycitydropdown.component.css'],
})
export class CountrycitydropdownComponent implements OnInit {

  private currentCountry: string;
  private countryNames:string[];
  private cityNames:string[];

  /*The constructor should only contain CountryService parameter.
    Any other parameter would cause error while rendering.  */
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryNames = this.countryService.getCountries();
    this.currentCountry = this.countryNames[0];
    this.cityNames = this.countryService.getCities(this.countryNames[0]);
  }

  getCountryCities(countryName):void{
    this.cityNames = this.countryService.getCities(countryName.target.value);
  }
}
