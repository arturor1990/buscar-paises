import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor:pointer;
      }
    `
  ]
})
export class PorPaisComponent{


  termino:string="";
  hayError: boolean=false;

  private paisesRespuesta:Country[]=[];
  paisesSugeridos: Country[]=[];
  mostrarSugerecias:boolean=false;

  get paises(){
    return [...this.paisesRespuesta];
  }
  
  

  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    console.log(termino);
    this.termino=termino;
    this.hayError=false;
    console.log(this.termino);
    this.paisesRespuesta=[];
    this.paisService.buscarPais(this.termino).subscribe((paises)=>{
      console.log(paises);
      if(paises.length==undefined){
        this.hayError=true;
        return;
      }
      this.paisesRespuesta=paises;
      this.mostrarSugerecias=false;
      return;
    });
  }

  sugerencias(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerecias=true;
    this.paisService.buscarPaisCorto(termino)
    .subscribe(paises=>{
      this.paisesSugeridos=paises.splice(0,5);
    });
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }


}
