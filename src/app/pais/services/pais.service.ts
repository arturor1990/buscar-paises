import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl:string ="https://restcountries.com/v2/";
  private apiUrlRegion:string ="https://restcountries.com/v3.1/";

  constructor(private http:HttpClient) { }


  get httpParams(){
    return new HttpParams()
    .set('fields','name,capital,alpha2Code,flag,population');
  }


  buscarPais(termino:string): Observable<Country[]>{

    const url:string=`${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams})
     // .pipe(catchError(err=>of([]))
      //);
  }

  buscarPaisCorto(termino:string): Observable<Country[]>{

    let httpParams = new HttpParams()
    .set('fields','name,alpha2Code');

    const url:string=`${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:httpParams})
     // .pipe(catchError(err=>of([]))
      //);
  }

  buscarCapital(termino:string): Observable<Country[]>{

    const url:string=`${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams})
     // .pipe(catchError(err=>of([]))
      //);

  }

  getPaiPorAlpha(id:string): Observable<Country>{

    const url:string=`${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url)
     // .pipe(catchError(err=>of([]))
      //);

  }

  buscarRegion(termino:string): Observable<Country[]>{

    const url:string=`${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams}).pipe(tap(console.log))
     // .pipe(catchError(err=>of([]))
      //);

  }

  





  
}
