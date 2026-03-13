import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

export interface Car {
    id: number;
    make: string;
    model: string;
    year: number;
    registrationExpiry: string;
}

@Injectable({
  providedIn: 'root',
})

export class CarService {
  private apiUrl = '/api/cars';

  constructor(private http: HttpClient){}

  getCars(make?: string): Observable<Car[]> {
    const params: any = {};
    if (make && make.trim() !== '') {
      params['make'] = make;
    }
    return this.http.get<Car[]>(this.apiUrl, {params});
  }
  
}
