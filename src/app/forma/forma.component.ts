import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.scss']
})

export class FormaComponent {

  values?: string;

  angForm= new FormGroup({
title: new FormControl("",[Validators.required, Validators.minLength(6)]),
link:new FormControl("",[Validators.required, Validators.minLength(6)]),
mesto:new FormControl("",[Validators.required,Validators.minLength(6)]),
vremeD:new FormControl("",[Validators.required,Validators.minLength(6)]),
mestoD:new FormControl("",[Validators.required,Validators.minLength(6)]),


  });
 validacija(){

console.log(this.angForm.value)

 }
 
getControl(name: any): AbstractControl| null{
return this.angForm.get(name);
}

  dodaj(title: HTMLInputElement, link: HTMLInputElement, mesto:HTMLInputElement, vremeD:HTMLInputElement, mestoD:HTMLInputElement): boolean {
    console.log(`Adding: ${title.value} and vremepolaska: ${link.value} and mesto polaska: ${mesto.value}  and vreme dolaska: ${vremeD.value}  and mesto dolaska: ${mestoD.value}`);
    return false;
  }
  }
