import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private products: Products[]=[];

  // public search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }


  getCatalogues(): Observable<Products[]> {
    return this.http.get<Products[]>(environment.apiUrl + 'catalogues');
  }


  getComplement(): Observable<Products[]> {
    return this.http.get<Products[]>(environment.apiUrl + 'complements');
  }

}
