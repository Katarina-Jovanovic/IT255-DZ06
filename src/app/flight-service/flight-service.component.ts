import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Letovi } from './letovi';
@Component({
  selector: 'app-flight-service',
  templateUrl: './flight-service.component.html',
  styleUrls: ['./flight-service.component.scss']
})
@Injectable()
export class FlightServiceComponent {

  constructor (private letovi:Letovi){
    this.letovi=letovi;
  }
  getPrice(numberOfFlights:number){
  let let1=this.letovi.broj_letova=10;
  let cen=this.letovi.cena=1000;

  if(let1>=10){
    cen=cen+1000;
    alert("CENA "+ cen);
  }

  }
  }
 
  

