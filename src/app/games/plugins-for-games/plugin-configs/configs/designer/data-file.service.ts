import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFileService {

  constructor(private http: HttpClient) { }

  getDataJsonFile(): Observable<any> {
    const url = 'assets/dummyJson/defaults_config_file.json'
    return this.http.get(url);
  }
}
