import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../bind1/bind1.component.css']
})
export class LoginComponent implements OnInit {

  isDisabled:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
