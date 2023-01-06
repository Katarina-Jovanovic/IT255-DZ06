import { Optional } from '@angular/core';

export class Post {

    idLeta: number;
    vremeP: string;
    mestoP: string;
    vremeD: string;
    mestoD: string;

    constructor(idLeta: number, vremeP: string, mestoP: string, vremeD:string, mestoD:string) {
this.idLeta = idLeta;
this.vremeP = vremeP;
this.mestoP = mestoP;
this.vremeD = vremeD;
this.mestoD=mestoD;
}

}