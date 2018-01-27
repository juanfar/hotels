import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import  { Observable } from 'rxjs/Observable';
import { Hotel } from '../hotel';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';

@Injectable()
export class HotelsService {
   private hotelsId: any[] = [];
  private options;
	private url = 'http://localhost:3000/api/hotel';

  constructor(private http: Http) {
    let headers = new Headers({
      'Content-Type': 'applications/json',
    });
    this.options = new RequestOptions({ headers: headers });
  }

    getHotels():Observable<Hotel[]> {
  		let url = `${this.url}`;
  		return this.http.get(url, this.options)
  					.map(r => r.json())
  					.catch(this.handleError);
  	}


    private handleError(error: Response | any) {
  		let errMsg: string;
  		if(error instanceof Response) {
  			let body = error.json() || '';
  			let err = body.error || JSON.stringify(body);
  			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  		}
  		else {
  			errMsg = error.message ? error.message : error.toString();
  		}
  		return Observable.throw(errMsg);
  	}
}
