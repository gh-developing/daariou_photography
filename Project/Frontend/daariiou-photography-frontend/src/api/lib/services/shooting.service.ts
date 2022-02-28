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
   * Path part for operation apiV1ShootingGetForAdminGet
   */
  static readonly ApiV1ShootingGetForAdminGetPath = '/api/v1/Shooting/GetForAdmin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingGetForAdminGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetForAdminGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ShootingDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingGetForAdminGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiV1ShootingGetForAdminGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetForAdminGet$Plain(params?: {
  }): Observable<Array<ShootingDto>> {

    return this.apiV1ShootingGetForAdminGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ShootingDto>>) => r.body as Array<ShootingDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingGetForAdminGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetForAdminGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ShootingDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingGetForAdminGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiV1ShootingGetForAdminGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetForAdminGet$Json(params?: {
  }): Observable<Array<ShootingDto>> {

    return this.apiV1ShootingGetForAdminGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ShootingDto>>) => r.body as Array<ShootingDto>)
    );
  }

  /**
   * Path part for operation apiV1ShootingGetForUserGet
   */
  static readonly ApiV1ShootingGetForUserGetPath = '/api/v1/Shooting/GetForUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingGetForUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetForUserGet$Plain$Response(params?: {
    uId?: number;
  }): Observable<StrictHttpResponse<Array<ShootingDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingGetForUserGetPath, 'get');
    if (params) {
      rb.query('uId', params.uId, {});
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
   * To access the full response (for headers, for example), `apiV1ShootingGetForUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetForUserGet$Plain(params?: {
    uId?: number;
  }): Observable<Array<ShootingDto>> {

    return this.apiV1ShootingGetForUserGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ShootingDto>>) => r.body as Array<ShootingDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingGetForUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetForUserGet$Json$Response(params?: {
    uId?: number;
  }): Observable<StrictHttpResponse<Array<ShootingDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingGetForUserGetPath, 'get');
    if (params) {
      rb.query('uId', params.uId, {});
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
   * To access the full response (for headers, for example), `apiV1ShootingGetForUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetForUserGet$Json(params?: {
    uId?: number;
  }): Observable<Array<ShootingDto>> {

    return this.apiV1ShootingGetForUserGet$Json$Response(params).pipe(
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
  apiV1ShootingAddPost$Plain$Response(params?: {
    body?: Shooting
  }): Observable<StrictHttpResponse<Shooting>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingAddPostPath, 'post');
    if (params) {
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
  apiV1ShootingAddPost$Plain(params?: {
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
  apiV1ShootingAddPost$Json$Response(params?: {
    body?: Shooting
  }): Observable<StrictHttpResponse<Shooting>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingAddPostPath, 'post');
    if (params) {
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
  apiV1ShootingAddPost$Json(params?: {
    body?: Shooting
  }): Observable<Shooting> {

    return this.apiV1ShootingAddPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Shooting>) => r.body as Shooting)
    );
  }

  /**
   * Path part for operation apiV1ShootingChangeStatusPut
   */
  static readonly ApiV1ShootingChangeStatusPutPath = '/api/v1/Shooting/ChangeStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingChangeStatusPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ShootingChangeStatusPut$Plain$Response(params?: {
    status?: string;
    body?: Shooting
  }): Observable<StrictHttpResponse<Shooting>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingChangeStatusPutPath, 'put');
    if (params) {
      rb.query('status', params.status, {});
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
   * To access the full response (for headers, for example), `apiV1ShootingChangeStatusPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ShootingChangeStatusPut$Plain(params?: {
    status?: string;
    body?: Shooting
  }): Observable<Shooting> {

    return this.apiV1ShootingChangeStatusPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Shooting>) => r.body as Shooting)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingChangeStatusPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ShootingChangeStatusPut$Json$Response(params?: {
    status?: string;
    body?: Shooting
  }): Observable<StrictHttpResponse<Shooting>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingChangeStatusPutPath, 'put');
    if (params) {
      rb.query('status', params.status, {});
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
   * To access the full response (for headers, for example), `apiV1ShootingChangeStatusPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ShootingChangeStatusPut$Json(params?: {
    status?: string;
    body?: Shooting
  }): Observable<Shooting> {

    return this.apiV1ShootingChangeStatusPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Shooting>) => r.body as Shooting)
    );
  }

}
