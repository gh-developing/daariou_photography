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

import { Shooting } from '../models/shooting';
import { ShootingDto } from '../models/shooting-dto';

@Injectable({
  providedIn: 'root',
})
export class ShootingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiV1ShootingGetByIdGet
   */
  static readonly ApiV1ShootingGetByIdGetPath = '/api/v1/Shooting/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetByIdGet$Plain$Response(params: {
    sId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<ShootingDto>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingGetByIdGetPath, 'get');
    if (params) {
      rb.query('sId', params.sId, {});
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShootingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1ShootingGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetByIdGet$Plain(params: {
    sId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<ShootingDto> {

    return this.apiV1ShootingGetByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ShootingDto>) => r.body as ShootingDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetByIdGet$Json$Response(params: {
    sId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<ShootingDto>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingGetByIdGetPath, 'get');
    if (params) {
      rb.query('sId', params.sId, {});
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShootingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1ShootingGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetByIdGet$Json(params: {
    sId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<ShootingDto> {

    return this.apiV1ShootingGetByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ShootingDto>) => r.body as ShootingDto)
    );
  }

  /**
   * Path part for operation apiV1ShootingGetGet
   */
  static readonly ApiV1ShootingGetGetPath = '/api/v1/Shooting/Get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingGetGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetGet$Plain$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Array<ShootingDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingGetGetPath, 'get');
    if (params) {
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ShootingDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1ShootingGetGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetGet$Plain(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Array<ShootingDto>> {

    return this.apiV1ShootingGetGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ShootingDto>>) => r.body as Array<ShootingDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingGetGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetGet$Json$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Array<ShootingDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingGetGetPath, 'get');
    if (params) {
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ShootingDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1ShootingGetGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetGet$Json(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Array<ShootingDto>> {

    return this.apiV1ShootingGetGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ShootingDto>>) => r.body as Array<ShootingDto>)
    );
  }

  /**
   * Path part for operation apiV1ShootingAddPost
   */
  static readonly ApiV1ShootingAddPostPath = '/api/v1/Shooting/Add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingAddPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ShootingAddPost$Plain$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: Shooting
  }): Observable<StrictHttpResponse<Shooting>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingAddPostPath, 'post');
    if (params) {
      rb.query('api-version', params['api-version'], {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Shooting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1ShootingAddPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ShootingAddPost$Plain(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: Shooting
  }): Observable<Shooting> {

    return this.apiV1ShootingAddPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Shooting>) => r.body as Shooting)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingAddPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ShootingAddPost$Json$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: Shooting
  }): Observable<StrictHttpResponse<Shooting>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingAddPostPath, 'post');
    if (params) {
      rb.query('api-version', params['api-version'], {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Shooting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1ShootingAddPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ShootingAddPost$Json(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: Shooting
  }): Observable<Shooting> {

    return this.apiV1ShootingAddPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Shooting>) => r.body as Shooting)
    );
  }

  /**
   * Path part for operation apiV1ShootingRejectPut
   */
  static readonly ApiV1ShootingRejectPutPath = '/api/v1/Shooting/Reject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingRejectPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingRejectPut$Plain$Response(params: {
    sId?: number;
    reasonRej?: string;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Shooting>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingRejectPutPath, 'put');
    if (params) {
      rb.query('sId', params.sId, {});
      rb.query('reasonRej', params.reasonRej, {});
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Shooting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1ShootingRejectPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingRejectPut$Plain(params: {
    sId?: number;
    reasonRej?: string;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Shooting> {

    return this.apiV1ShootingRejectPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Shooting>) => r.body as Shooting)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingRejectPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingRejectPut$Json$Response(params: {
    sId?: number;
    reasonRej?: string;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Shooting>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingRejectPutPath, 'put');
    if (params) {
      rb.query('sId', params.sId, {});
      rb.query('reasonRej', params.reasonRej, {});
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Shooting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1ShootingRejectPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingRejectPut$Json(params: {
    sId?: number;
    reasonRej?: string;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Shooting> {

    return this.apiV1ShootingRejectPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Shooting>) => r.body as Shooting)
    );
  }

}
