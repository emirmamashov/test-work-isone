// core
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// config
import { Api_config } from '../config';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// services
import { HandleErrorService } from './handle-error.service';

@Injectable()
export class DomNodeService {

  constructor(
    private http: Http,
    private handleErrorService: HandleErrorService,
  ) { }

  getData(): Observable<any> {
    const url: string = Api_config.getData.url;
    return this.http.get(url)
          .map(res => res.json())
          .catch(this.handleErrorService.handleError);
  }
}
