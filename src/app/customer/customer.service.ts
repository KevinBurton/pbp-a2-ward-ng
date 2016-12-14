import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Customer } from './';

const URL_CUSTOMERS = 'app/customers.json'

@Injectable()
export class CustomerService {

  constructor(private _http: Http) { }
  getCustomers() : Observable<Customer[]> {
      return this._http.get(URL_CUSTOMERS)
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }
  private _handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }  
}
