import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'https://localhost:7254/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }


  getItem(entity: string) {
    return this.http.get(this.url + entity);
  }

  setItem(entity: string, entityData: any, callback: any) {
    return this.http.post(
      this.url + entity,
      entityData,
      this.httpOptions)
        .subscribe(() => {
          return callback();
        });
  }

  updateItem(entity: string, entityData: any, callback: any) {
    return this.http.put(
      this.url + entity + '/' + entityData.id,
      entityData,
      this.httpOptions)
        .subscribe(() => {
          return callback();
        });
  }

  deleteItem(entity: string, entityData: any, callback: any) {
    return this.http.delete(
      this.url + entity + '/' + entityData.id)
        .subscribe(() => {
          return callback();
        });
  }

}
