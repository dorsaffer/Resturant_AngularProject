import { Injectable } from '@angular/core';
import { map ,catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProcessHttpService } from './process-http.service';
import { Feedback } from '../shared/feedback';



@Injectable({
  providedIn: 'root'
})
export class FeedBackService {
 
  
  constructor(private http: HttpClient,private processHTTPMsgService: ProcessHttpService) { }

  submitFeedback(feedBack:Feedback) : Observable<Feedback> {
    console.log(feedBack)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Feedback>(baseURL + 'feedback/',feedBack, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

}
