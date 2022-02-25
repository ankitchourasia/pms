import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey-service/survey.service';

@Component({
  selector: 'app-survey-project-details',
  templateUrl: './survey-project-details.component.html',
  styleUrls: ['./survey-project-details.component.css']
})
export class SurveyProjectDetailsComponent implements OnInit {

  projectId : any;
  items : any;
  loading : boolean = false;
  searchText : any;
  constructor(private surveyService : SurveyService) { }

  ngOnInit(): void {
  }

  searchButtonClicked(){
    this.loading = true;
    this.surveyService.getProjectDetailsById(this.projectId).subscribe(success =>{
      this.loading = false;
      console.log(success);
      let result : any = success;
      this.items = result.Survey;
    }, error =>{
      this.loading = false;
      console.log(error);
    });
  }

}
