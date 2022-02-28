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
   * Path part for operation apiV1KindOfShootingGetAllGet
   */
  static readonly ApiV1KindOfShootingGetAllGetPath = '/api/v1/KindOfShooting/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1KindOfShootingGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1KindOfShootingGetAllGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<KindOfShooting>>> {

    const rb = new RequestBuilder(this.rootUrl, KindOfShootingService.ApiV1KindOfShootingGetAllGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiV1KindOfShootingGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1KindOfShootingGetAllGet$Plain(params?: {
  }): Observable<Array<KindOfShooting>> {

    return this.apiV1KindOfShootingGetAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<KindOfShooting>>) => r.body as Array<KindOfShooting>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1KindOfShootingGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1KindOfShootingGetAllGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<KindOfShooting>>> {

    const rb = new RequestBuilder(this.rootUrl, KindOfShootingService.ApiV1KindOfShootingGetAllGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiV1KindOfShootingGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1KindOfShootingGetAllGet$Json(params?: {
  }): Observable<Array<KindOfShooting>> {

    return this.apiV1KindOfShootingGetAllGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<KindOfShooting>>) => r.body as Array<KindOfShooting>)
    );
  }

  /**
   * Path part for operation apiV1KindOfShootingGetByIdGet
   */
  static readonly ApiV1KindOfShootingGetByIdGetPath = '/api/v1/KindOfShooting/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1KindOfShootingGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1KindOfShootingGetByIdGet$Plain$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<KindOfShooting>> {

    const rb = new RequestBuilder(this.rootUrl, KindOfShootingService.ApiV1KindOfShootingGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<KindOfShooting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1KindOfShootingGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1KindOfShootingGetByIdGet$Plain(params?: {
    id?: number;
  }): Observable<KindOfShooting> {

    return this.apiV1KindOfShootingGetByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<KindOfShooting>) => r.body as KindOfShooting)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1KindOfShootingGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1KindOfShootingGetByIdGet$Json$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<KindOfShooting>> {

    const rb = new RequestBuilder(this.rootUrl, KindOfShootingService.ApiV1KindOfShootingGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<KindOfShooting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1KindOfShootingGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1KindOfShootingGetByIdGet$Json(params?: {
    id?: number;
  }): Observable<KindOfShooting> {

    return this.apiV1KindOfShootingGetByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<KindOfShooting>) => r.body as KindOfShooting)
    );
  }

}
