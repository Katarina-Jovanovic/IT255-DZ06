import { Component } from '@angular/core';

@Component({
  selector: 'app-preporuka',
  templateUrl: './preporuka.component.html',
  styleUrls: ['./preporuka.component.scss']
})
export class PreporukaComponent {

  IDleta:number = 123;
  Obrok:string="Piletina";
  Pica:string="Koka-kola";
  uredjaji:string="Tableti";
  
 
  IDleta1:number = 1230;
  Pica1:string="Bezalkoholni daiquiri";
  Obrok1:string="Veganska pica sa 4 vrste sira";
  uredjaji1:string="Mobilni telefoni";
 
}
