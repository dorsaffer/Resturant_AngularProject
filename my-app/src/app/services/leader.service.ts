import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Leader } from '../shared/leader'
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHttpService } from './process-http.service';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {



  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHttpService
  ) { }

  getLeaders():Observable<Leader[]> {
    return this.http
      .get<Leader[]>(baseURL + '  leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  
  getfeaturedLeader(): Observable<Leader> {
    return this.http
      .get<Leader[]>(baseURL + 'leadership?featured=true')
      .pipe(map(leader => leader[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
