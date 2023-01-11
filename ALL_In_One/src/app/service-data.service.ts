import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  constructor() { }

  clickEvent(){
    alert('The Data Service Data Comes');
  }
}
