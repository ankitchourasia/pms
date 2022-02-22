import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver'

@Injectable({
  providedIn: 'root'
})
export class GlobalConstants {

  constructor() { }

  readonly EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  readonly EXCEL_EXTENSION = '.xlsx';
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet',worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: this.EXCEL_TYPE
    });
    saveAs.saveAs(data, fileName + '_export_' + new Date().getTime() + this.EXCEL_EXTENSION);
  }
 
}

export function downloadByBlob(content : any, extention : any,fileName : any = "file"){
  let file = new Blob([content]);
  const fileURL = window.URL.createObjectURL(file);
  //window.open(fileURL, '_blank');
  //------------------OR----------------------
  let anchorElement = document.createElement("a");
  anchorElement.href = fileURL;
  anchorElement.download = fileName + "." + extention;
  anchorElement.click();
  anchorElement.remove();
}
