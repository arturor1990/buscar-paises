import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{


  termino:string="";
  hayError: boolean=false;

  private capitalesRespuesta:Country[]=[];

  get capitales(){
    return [...this.capitalesRespuesta];
  }
  

  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    console.log(termino);
    this.termino=termino;
    this.hayError=false;
    console.log(this.termino);
    this.capitalesRespuesta=[];
    this.paisService.buscarCapital(this.termino).subscribe((capitales)=>{
      console.log(capitales);
      if(capitales.length==undefined){
        this.hayError=true;
        return;
      }
      this.capitalesRespuesta=capitales;
      return;
    });
  }

}
