/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Qandum } from '../models/qandum';

@Injectable({
  providedIn: 'root',
})
export class QandAService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiV1QandAGetAllGet
   */
  static readonly ApiV1QandAGetAllGetPath = '/api/v1/QandA/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1QandAGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1QandAGetAllGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Qandum>>> {

    const rb = new RequestBuilder(this.rootUrl, QandAService.ApiV1QandAGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Qandum>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1QandAGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1QandAGetAllGet$Plain(params?: {
  }): Observable<Array<Qandum>> {

    return this.apiV1QandAGetAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Qandum>>) => r.body as Array<Qandum>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1QandAGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1QandAGetAllGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Qandum>>> {

    const rb = new RequestBuilder(this.rootUrl, QandAService.ApiV1QandAGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Qandum>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1QandAGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1QandAGetAllGet$Json(params?: {
  }): Observable<Array<Qandum>> {

    return this.apiV1QandAGetAllGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Qandum>>) => r.body as Array<Qandum>)
    );
  }

}
