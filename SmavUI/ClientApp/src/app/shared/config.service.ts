import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: Object;
  private address: string;

  constructor(private http: HttpClient)
  {
    //this.http.get("./assets/MyConfig.json").toPromise((resp: any) => {
    //  this.address = resp[key];
    //});

  }
  //public getApiUser() {
  //  return this.address;
  //}
  //public getJSON(): Observable<any> {
  public Load() {
    this.http.get("./assets/MyConfig.json").subscribe((data: any) => {
        this.config = data;
    });
  }
  public GetKey(Key:string) {
    return this.config[Key];
  }
  //public getApiUser(Key: string): string {
  //  let resultKey: string;
  //  this.getJSON().subscribe((data: any) => {
  //    resultKey = data[Key];
  //  });
  //  return resultKey;
  //}
}
