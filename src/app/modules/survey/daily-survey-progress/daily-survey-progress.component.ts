import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { SurveyService } from 'src/app/services/survey-service/survey.service';
import { GlobalConstants } from 'src/app/utility/global-constants';

@Component({
  selector: 'app-daily-survey-progress',
  templateUrl: './daily-survey-progress.component.html',
  styleUrls: ['./daily-survey-progress.component.css']
})
export class DailySurveyProgressComponent implements OnInit {

  constructor(private surveyService : SurveyService, private paginationService : PaginationService, private globalConstant : GlobalConstants) { }

  ngOnInit(): void {
    this.getData();
  }

  loading : boolean = false;
  sanctionedEstimates : any;
  estimatesToShow : any;
  getData(){
    this.loading = true;
    this.surveyService.getData().subscribe(success =>{
      this.loading = false;
      let data : any = success;
      this.sanctionedEstimates = data['sanction estimate'];
      console.log(this.sanctionedEstimates);
      this.setPage(1);
    }, error =>{
      this.loading = false;
      console.log(error);
      
    });
  }

  pager: any = {};
  pageSize: number = 10;
  currentPage: number = 1;
  public currentPageCounter: number = 0;

  setPage(page: number) {
    if (page < 1) {
      return;
    }
    this.pager = this.paginationService.getPager(this.sanctionedEstimates.length, page, this.pageSize);
    this.currentPage = this.pager.currentPage;
    this.updateCurrentPageCounter();
    console.log(this.pager);
    this.estimatesToShow = this.sanctionedEstimates.slice(this.pager.startIndex, this.pager.endIndex + 1)
  }

  private updateCurrentPageCounter() {
    this.currentPageCounter = (this.currentPage * this.pageSize) - this.pageSize;
  }

  pageSizeChanged(){
    this.setPage(1);
  }

  exportclicked(tableId : any){
    this.globalConstant.exportAsExcelFile(this.sanctionedEstimates, 'daily_progress_report');
    // this.exportTableToExcel(tableId, 'daily_progress_report');
  }

  exportTableToExcel(tableID : any, fileName : any){
    let dataType = 'data:application/vnd.ms-excel';
    fileName = fileName ? fileName : 'file';
    let htmltable = document.getElementById(tableID);
    let tableHTML = htmltable?.outerHTML;
    // this.downloadHTML(tableHTML, dataType, fileName, 'xls');
    this.downloadByBlob(tableHTML, dataType, fileName, 'xls');
  }

  downloadByBlob(content : any, dataType : any, fileName : any, extention : any){
    let file = new Blob(['\ufeff', content], {type: dataType});
    const fileURL = window.URL.createObjectURL(file);
    //window.open(fileURL, '_blank');
    //------------------OR----------------------
    let anchorElement = document.createElement("a");
    anchorElement.href = fileURL;
    anchorElement.download = fileName + "." + extention;
    anchorElement.click();
    anchorElement.remove();
  }
}
