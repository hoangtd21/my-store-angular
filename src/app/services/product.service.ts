import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  data = '../../assets/data.json';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<[]> {
    return this.http.get<[]>(this.data);
  }
}
