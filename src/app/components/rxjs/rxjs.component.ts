import { Component, OnInit } from '@angular/core';
import { Plet } from 'src/app/models/plet';
import { PletService } from 'src/app/services/plet/plet.component';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent  implements OnInit{


  plets?: Plet[];
  constructor(private pletService: PletService) { }

  ngOnInit(): void {
 
  }

  getCats(): void {
    this.pletService.getLet().subscribe((data: any)=> this.plets = data);
  }
}

