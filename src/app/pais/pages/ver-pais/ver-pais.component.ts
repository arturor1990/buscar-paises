import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import {switchMap,tap} from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {

    // this.activatedRoute.params
    // .subscribe(({id})=>{
    //   console.log(id);
    //   this.paisService.getPaiPorAlpha(id).subscribe(pais=>{
    //     console.log(pais);
    //   });
      
    // });

    this.activatedRoute.params
    .pipe(
      // switchMap((param)=>this.paisService.getPaiPorAlpha(param.id) )
      switchMap(({id})=>this.paisService.getPaiPorAlpha(id) ),
      tap(console.log)
    )
    .subscribe(pais=>this.pais=pais);

  }

}
