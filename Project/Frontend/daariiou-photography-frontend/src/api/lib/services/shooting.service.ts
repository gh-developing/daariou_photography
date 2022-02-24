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
   * Path part for operation apiV1ShootingGetGet
   */
  static readonly ApiV1ShootingGetGetPath = '/api/v1/Shooting/Get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingGetGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ShootingDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingGetGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiV1ShootingGetGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetGet$Plain(params?: {
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
  apiV1ShootingGetGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ShootingDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShootingService.ApiV1ShootingGetGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiV1ShootingGetGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ShootingGetGet$Json(params?: {
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
  apiV1ShootingAddPost$Plain$Response(params?: {
    body?: ShootingDto
  }): Observable<StrictHttpResponse<ShootingDto>> {

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
        return r as StrictHttpResponse<ShootingDto>;
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
    body?: ShootingDto
  }): Observable<ShootingDto> {

    return this.apiV1ShootingAddPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ShootingDto>) => r.body as ShootingDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ShootingAddPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ShootingAddPost$Json$Response(params?: {
    body?: ShootingDto
  }): Observable<StrictHttpResponse<ShootingDto>> {

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
        return r as StrictHttpResponse<ShootingDto>;
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
    body?: ShootingDto
  }): Observable<ShootingDto> {

    return this.apiV1ShootingAddPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ShootingDto>) => r.body as ShootingDto)
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
