import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right:5px
  }`
  ]
})
export class PorRegionComponent {


  regions:string[]=[ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string="";

  actvarRegion(region:string){

    if(region==this.regionActiva){return}
    this.regionActiva=region
    console.log(this.regionActiva);
    this.buscar(this.regionActiva);
  }

  hayError: boolean=false;

  private paisRespuesta:Country[]=[];

  get paises(){
    return [...this.paisRespuesta];
  }

  getClaseCSS (region:string):string{
    return (region===this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary'
  }
  

  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    
    console.log(termino);
    this.hayError=false;
    this.paisRespuesta=[];
    this.paisService.buscarRegion(this.regionActiva).subscribe((pais)=>{
      //console.log(pais);
      if(pais.length==undefined){
        this.hayError=true;
        return;
      }
      this.paisRespuesta=pais;
      return;
    });
  }


}
