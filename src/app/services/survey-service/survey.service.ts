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

  getProjectDetailsById(projectId : Number){
    let options : any = {params: { sb_project_id: projectId }};
    return this.http.get('/php/assets/emb_data/budget.php', options);
  }
}
