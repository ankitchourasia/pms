import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http : HttpClient) { }

  getData(){
    // let options : any = { responseType : 'text/html' };
    return this.http.get('/php/cons_data/json_estimate.php');
  }
}
