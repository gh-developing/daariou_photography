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

import { Picture } from '../models/picture';

@Injectable({
  providedIn: 'root',
})
export class PictureService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiV1PictureGetAllGet
   */
  static readonly ApiV1PictureGetAllGetPath = '/api/v1/Picture/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PictureGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetAllGet$Plain$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Array<Picture>>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PictureGetAllGetPath, 'get');
    if (params) {
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Picture>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1PictureGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetAllGet$Plain(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Array<Picture>> {

    return this.apiV1PictureGetAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Picture>>) => r.body as Array<Picture>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PictureGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetAllGet$Json$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Array<Picture>>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PictureGetAllGetPath, 'get');
    if (params) {
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Picture>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1PictureGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetAllGet$Json(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Array<Picture>> {

    return this.apiV1PictureGetAllGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Picture>>) => r.body as Array<Picture>)
    );
  }

  /**
   * Path part for operation apiV1PictureGetAllForUserGet
   */
  static readonly ApiV1PictureGetAllForUserGetPath = '/api/v1/Picture/GetAllForUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PictureGetAllForUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetAllForUserGet$Plain$Response(params: {
    uId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Array<Picture>>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PictureGetAllForUserGetPath, 'get');
    if (params) {
      rb.query('uId', params.uId, {});
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Picture>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1PictureGetAllForUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetAllForUserGet$Plain(params: {
    uId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Array<Picture>> {

    return this.apiV1PictureGetAllForUserGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Picture>>) => r.body as Array<Picture>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PictureGetAllForUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetAllForUserGet$Json$Response(params: {
    uId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Array<Picture>>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PictureGetAllForUserGetPath, 'get');
    if (params) {
      rb.query('uId', params.uId, {});
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Picture>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1PictureGetAllForUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetAllForUserGet$Json(params: {
    uId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Array<Picture>> {

    return this.apiV1PictureGetAllForUserGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Picture>>) => r.body as Array<Picture>)
    );
  }

  /**
   * Path part for operation apiV1PictureGetByIdGet
   */
  static readonly ApiV1PictureGetByIdGetPath = '/api/v1/Picture/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PictureGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetByIdGet$Plain$Response(params: {
    pId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Picture>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PictureGetByIdGetPath, 'get');
    if (params) {
      rb.query('pId', params.pId, {});
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Picture>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1PictureGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetByIdGet$Plain(params: {
    pId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Picture> {

    return this.apiV1PictureGetByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Picture>) => r.body as Picture)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PictureGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetByIdGet$Json$Response(params: {
    pId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Picture>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PictureGetByIdGetPath, 'get');
    if (params) {
      rb.query('pId', params.pId, {});
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Picture>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1PictureGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetByIdGet$Json(params: {
    pId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Picture> {

    return this.apiV1PictureGetByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Picture>) => r.body as Picture)
    );
  }

  /**
   * Path part for operation apiV1PicturePostPost
   */
  static readonly ApiV1PicturePostPostPath = '/api/v1/Picture/Post';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PicturePostPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1PicturePostPost$Plain$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: Picture
  }): Observable<StrictHttpResponse<Picture>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PicturePostPostPath, 'post');
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
        return r as StrictHttpResponse<Picture>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1PicturePostPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1PicturePostPost$Plain(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: Picture
  }): Observable<Picture> {

    return this.apiV1PicturePostPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Picture>) => r.body as Picture)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PicturePostPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1PicturePostPost$Json$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: Picture
  }): Observable<StrictHttpResponse<Picture>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PicturePostPostPath, 'post');
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
        return r as StrictHttpResponse<Picture>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1PicturePostPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1PicturePostPost$Json(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: Picture
  }): Observable<Picture> {

    return this.apiV1PicturePostPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Picture>) => r.body as Picture)
    );
  }

}
