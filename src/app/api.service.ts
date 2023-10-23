import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from './login/login.component';
import { Nms } from './nms/nms.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private _http : HttpClient) { }

  apiHost = 'http://localhost:9090/';

  public loginUserFromRemote(registration : Registration):Observable<any>{
   return this._http.post<any>(this.apiHost + 'login', registration)
  }

  public registerUserFromRemote(registration : Registration):Observable<any>{
    return this._http.post<any>(this.apiHost + 'registeruser', registration)
   }

  public getNms(): Observable<Nms[]> {
    return this._http.get<Nms[]>(this.apiHost+'nms');
  }
} 
