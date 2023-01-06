import { Component } from '@angular/core';

@Component({
  selector: 'app-letovi',
  templateUrl: './letovi.component.html',
  styleUrls: ['./letovi.component.scss']
})
export class LetoviComponent  {
  IDleta:number = 123;
  VremePolaska:string="15:00";
  MestoPolaska:string="Beograd";
  VremeDolaska:string="19:00";
  MestoDolaska:string="Amsterdnam";
 
  IDleta1:number = 1230;
  VremePolaska1:string="10:00";
  MestoPolaska1:string="Beograd";
  VremeDolaska1:string="11:00";
  MestoDolaska1:string="Atina";
}
