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

import { KindOfShooting } from '../models/kind-of-shooting';

@Injectable({
  providedIn: 'root',
})
export class KindOfShootingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiV1KindOfShootingGetGet
   */
  static readonly ApiV1KindOfShootingGetGetPath = '/api/v1/KindOfShooting/Get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1KindOfShootingGetGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1KindOfShootingGetGet$Plain$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Array<KindOfShooting>>> {

    const rb = new RequestBuilder(this.rootUrl, KindOfShootingService.ApiV1KindOfShootingGetGetPath, 'get');
    if (params) {
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<KindOfShooting>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1KindOfShootingGetGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1KindOfShootingGetGet$Plain(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Array<KindOfShooting>> {

    return this.apiV1KindOfShootingGetGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<KindOfShooting>>) => r.body as Array<KindOfShooting>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1KindOfShootingGetGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1KindOfShootingGetGet$Json$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Array<KindOfShooting>>> {

    const rb = new RequestBuilder(this.rootUrl, KindOfShootingService.ApiV1KindOfShootingGetGetPath, 'get');
    if (params) {
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<KindOfShooting>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1KindOfShootingGetGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1KindOfShootingGetGet$Json(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Array<KindOfShooting>> {

    return this.apiV1KindOfShootingGetGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<KindOfShooting>>) => r.body as Array<KindOfShooting>)
    );
  }

}
