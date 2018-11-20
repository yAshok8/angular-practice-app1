import { Injectable } from '@angular/core';
import { ICountry } from '../models/country'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countryCity: ICountry[] = [
    { countryName: 'India', cities: ['Mumbai', 'Chennai', 'Hyderabad', 'Kolkata'] },
    { countryName: 'America', cities: ['Las Vegas', 'New York', 'Brooklyn', 'St. Francisco'] },
    { countryName: 'Italy', cities: ['Milan', 'Munic', 'Dubline', 'Germany City', 'Vanice', 'Cinque Terre'] },
    { countryName: 'Australia', cities: ['Sydney', 'Melnourne', 'Perth', 'Bathurst', 'Bonbury'] },
  ];

  constructor() { }

  getCountries():string[]{
    let countries : string[] = new Array();
    this.countryCity.forEach(element => {
      countries.push(element.countryName);
    });
    return countries;
  }

  getCities(countryName:string):string[]{
    let cities : string[];
    this.countryCity.forEach(element => {
      if(element.countryName === countryName)
        cities = element.cities;
    });
    return cities;
  }
}
