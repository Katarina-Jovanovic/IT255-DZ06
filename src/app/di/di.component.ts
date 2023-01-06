import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Letovi } from '../flight-service/letovi';
import { FlightServiceComponent } from '../flight-service/flight-service.component';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DIComponent implements OnInit {

  constructor(private FlightService : FlightServiceComponent) {
    this.FlightService = FlightService;
    }
    Letovi = this.FlightService.getPrice(10);

  ngOnInit(): void {
  }

}
