import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetoviComponent } from './letovi/letovi.component';
import { FormaComponent } from './forma/forma.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightServiceComponent } from './flight-service/flight-service.component';
import { Letovi } from './flight-service/letovi';
import { DIComponent } from './di/di.component';
import { HttpClientModule } from '@angular/common/http';
import { KomponentaComponent } from './komponenta/komponenta.component';
import { PrletComponent } from './prlet/prlet.component';
import { PletComponent } from './services/plet/plet.component';
import { RxjsComponent } from './rxjs/rxjs.component';






const routes: Routes = [
{path: 'letovi', component: LetoviComponent },
{path: 'preporuka', component: PreporukaComponent },
{path: 'o-nama', component: ONamaComponent},
{path: 'forma', component:FormaComponent},
{path:'di', component:DIComponent},
{path: 'komponenta', component:KomponentaComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LetoviComponent,
    FormaComponent,
    NavbarComponent,
    PreporukaComponent,
    ONamaComponent,
    FlightServiceComponent,
    DIComponent,
    KomponentaComponent,
    PrletComponent,
    PletComponent,
    RxjsComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [FlightServiceComponent,Letovi],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
