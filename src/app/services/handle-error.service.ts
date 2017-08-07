import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

// models
import { ErrorMsg } from '../models/error';

// rxjs
import { Observable } from 'rxjs/Observable';
// INSTEAD of
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HandleErrorService {

  constructor() { }

  handleError(error: Response | any): Observable<ErrorMsg> {
    let errMsg = new ErrorMsg();
    errMsg.status = 0;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.err || JSON.stringify(body);

      errMsg.message = `${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  returnError(err: string): Observable<string> {
    return Observable.throw(err);
  }

}
