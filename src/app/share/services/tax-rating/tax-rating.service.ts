import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  ConverterTaxGet, ConverterTaxPost } from '../../entities/converter-tax';

@Injectable({
  providedIn: 'root'
})
export class TaxRatingService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  post(calc: ConverterTaxPost) {
    return this.http.post<any>(this.API_URL + 'converter-tax', calc).toPromise()
      .then(res => <ConverterTaxGet>res.data)
      .then(data => { return data; });
  }
  
}