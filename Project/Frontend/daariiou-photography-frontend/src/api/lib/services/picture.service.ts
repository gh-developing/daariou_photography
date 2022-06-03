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
import { PictureDto } from '../models/picture-dto';

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
   * Path part for operation apiV1PictureGetGet
   */
  static readonly ApiV1PictureGetGetPath = '/api/v1/Picture/Get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PictureGetGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Picture>>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PictureGetGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiV1PictureGetGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetGet$Plain(params?: {
  }): Observable<Array<Picture>> {

    return this.apiV1PictureGetGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Picture>>) => r.body as Array<Picture>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PictureGetGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Picture>>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PictureGetGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiV1PictureGetGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetGet$Json(params?: {
  }): Observable<Array<Picture>> {

    return this.apiV1PictureGetGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Picture>>) => r.body as Array<Picture>)
    );
  }

  /**
   * Path part for operation apiV1PictureGetByKoSIdGet
   */
  static readonly ApiV1PictureGetByKoSIdGetPath = '/api/v1/Picture/GetByKoSId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PictureGetByKoSIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetByKoSIdGet$Plain$Response(params?: {
    kosID?: number;
  }): Observable<StrictHttpResponse<Array<PictureDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PictureGetByKoSIdGetPath, 'get');
    if (params) {
      rb.query('kosID', params.kosID, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PictureDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1PictureGetByKoSIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetByKoSIdGet$Plain(params?: {
    kosID?: number;
  }): Observable<Array<PictureDto>> {

    return this.apiV1PictureGetByKoSIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PictureDto>>) => r.body as Array<PictureDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PictureGetByKoSIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetByKoSIdGet$Json$Response(params?: {
    kosID?: number;
  }): Observable<StrictHttpResponse<Array<PictureDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PictureGetByKoSIdGetPath, 'get');
    if (params) {
      rb.query('kosID', params.kosID, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PictureDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1PictureGetByKoSIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetByKoSIdGet$Json(params?: {
    kosID?: number;
  }): Observable<Array<PictureDto>> {

    return this.apiV1PictureGetByKoSIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PictureDto>>) => r.body as Array<PictureDto>)
    );
  }

  /**
   * Path part for operation apiV1PictureGetByUserIdGet
   */
  static readonly ApiV1PictureGetByUserIdGetPath = '/api/v1/Picture/GetByUserID';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PictureGetByUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetByUserIdGet$Plain$Response(params?: {
    uId?: number;
  }): Observable<StrictHttpResponse<Array<PictureDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PictureGetByUserIdGetPath, 'get');
    if (params) {
      rb.query('uId', params.uId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PictureDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1PictureGetByUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetByUserIdGet$Plain(params?: {
    uId?: number;
  }): Observable<Array<PictureDto>> {

    return this.apiV1PictureGetByUserIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PictureDto>>) => r.body as Array<PictureDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PictureGetByUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetByUserIdGet$Json$Response(params?: {
    uId?: number;
  }): Observable<StrictHttpResponse<Array<PictureDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PictureGetByUserIdGetPath, 'get');
    if (params) {
      rb.query('uId', params.uId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PictureDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1PictureGetByUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1PictureGetByUserIdGet$Json(params?: {
    uId?: number;
  }): Observable<Array<PictureDto>> {

    return this.apiV1PictureGetByUserIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PictureDto>>) => r.body as Array<PictureDto>)
    );
  }

  /**
   * Path part for operation apiV1PicturePostMultiplePost
   */
  static readonly ApiV1PicturePostMultiplePostPath = '/api/v1/Picture/PostMultiple';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PicturePostMultiplePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1PicturePostMultiplePost$Plain$Response(params?: {
    body?: Array<Picture>
  }): Observable<StrictHttpResponse<Array<Picture>>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PicturePostMultiplePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiV1PicturePostMultiplePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1PicturePostMultiplePost$Plain(params?: {
    body?: Array<Picture>
  }): Observable<Array<Picture>> {

    return this.apiV1PicturePostMultiplePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Picture>>) => r.body as Array<Picture>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1PicturePostMultiplePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1PicturePostMultiplePost$Json$Response(params?: {
    body?: Array<Picture>
  }): Observable<StrictHttpResponse<Array<Picture>>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PicturePostMultiplePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiV1PicturePostMultiplePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1PicturePostMultiplePost$Json(params?: {
    body?: Array<Picture>
  }): Observable<Array<Picture>> {

    return this.apiV1PicturePostMultiplePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Picture>>) => r.body as Array<Picture>)
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
  apiV1PicturePostPost$Plain$Response(params?: {
    body?: Picture
  }): Observable<StrictHttpResponse<Picture>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PicturePostPostPath, 'post');
    if (params) {
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
  apiV1PicturePostPost$Plain(params?: {
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
  apiV1PicturePostPost$Json$Response(params?: {
    body?: Picture
  }): Observable<StrictHttpResponse<Picture>> {

    const rb = new RequestBuilder(this.rootUrl, PictureService.ApiV1PicturePostPostPath, 'post');
    if (params) {
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
  apiV1PicturePostPost$Json(params?: {
    body?: Picture
  }): Observable<Picture> {

    return this.apiV1PicturePostPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Picture>) => r.body as Picture)
    );
  }

}
