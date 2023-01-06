
    import { HttpClient } from '@angular/common/http';
    import { Component } from '@angular/core';
    import { Observable } from 'rxjs';
    import { Plet } from 'src/app/models/plet';
@Component({
  selector: 'app-plet',
  templateUrl: './plet.component.html',
  styleUrls: ['./plet.component.scss']
})

  
    export class PletService {
    
      constructor(private _httpClient: HttpClient) {
       }
    
       private lambda = 'https://github.com/pro-react/sample-code/blob/master/chapter%206%20(Flux)/aircheap/public/flights.json'
    
       getLet(): Observable<Plet[]>{
          return this._httpClient.get<Plet[]>(this.lambda);
       }
    
       getLets(id: number): Observable<Plet>{
        return this._httpClient.get<Plet>(this.lambda+"/"+id);
       }
    }
    


