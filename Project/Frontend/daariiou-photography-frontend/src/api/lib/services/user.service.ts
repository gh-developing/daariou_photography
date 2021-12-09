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

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiV1UserGetAllGet
   */
  static readonly ApiV1UserGetAllGetPath = '/api/v1/User/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UserGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserGetAllGet$Plain$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Array<User>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiV1UserGetAllGetPath, 'get');
    if (params) {
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<User>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UserGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserGetAllGet$Plain(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Array<User>> {

    return this.apiV1UserGetAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<User>>) => r.body as Array<User>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UserGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserGetAllGet$Json$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<Array<User>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiV1UserGetAllGetPath, 'get');
    if (params) {
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<User>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UserGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserGetAllGet$Json(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<Array<User>> {

    return this.apiV1UserGetAllGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<User>>) => r.body as Array<User>)
    );
  }

  /**
   * Path part for operation apiV1UserLoginGet
   */
  static readonly ApiV1UserLoginGetPath = '/api/v1/User/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UserLoginGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserLoginGet$Plain$Response(params: {
    username?: string;
    password?: string;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiV1UserLoginGetPath, 'get');
    if (params) {
      rb.query('username', params.username, {});
      rb.query('password', params.password, {});
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UserLoginGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserLoginGet$Plain(params: {
    username?: string;
    password?: string;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<User> {

    return this.apiV1UserLoginGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UserLoginGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserLoginGet$Json$Response(params: {
    username?: string;
    password?: string;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiV1UserLoginGetPath, 'get');
    if (params) {
      rb.query('username', params.username, {});
      rb.query('password', params.password, {});
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UserLoginGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserLoginGet$Json(params: {
    username?: string;
    password?: string;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<User> {

    return this.apiV1UserLoginGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation apiV1UserGetByIdGet
   */
  static readonly ApiV1UserGetByIdGetPath = '/api/v1/User/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UserGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserGetByIdGet$Plain$Response(params: {
    uId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiV1UserGetByIdGetPath, 'get');
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
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UserGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserGetByIdGet$Plain(params: {
    uId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<User> {

    return this.apiV1UserGetByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UserGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserGetByIdGet$Json$Response(params: {
    uId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiV1UserGetByIdGetPath, 'get');
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
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UserGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserGetByIdGet$Json(params: {
    uId?: number;

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<User> {

    return this.apiV1UserGetByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation apiV1UserRegisterPost
   */
  static readonly ApiV1UserRegisterPostPath = '/api/v1/User/Register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UserRegisterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1UserRegisterPost$Plain$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: User
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiV1UserRegisterPostPath, 'post');
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
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UserRegisterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1UserRegisterPost$Plain(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: User
  }): Observable<User> {

    return this.apiV1UserRegisterPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UserRegisterPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1UserRegisterPost$Json$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: User
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiV1UserRegisterPostPath, 'post');
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
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UserRegisterPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1UserRegisterPost$Json(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: User
  }): Observable<User> {

    return this.apiV1UserRegisterPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation apiV1UserUpdatePut
   */
  static readonly ApiV1UserUpdatePutPath = '/api/v1/User/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UserUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1UserUpdatePut$Plain$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: User
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiV1UserUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UserUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1UserUpdatePut$Plain(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: User
  }): Observable<User> {

    return this.apiV1UserUpdatePut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UserUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1UserUpdatePut$Json$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: User
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiV1UserUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UserUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1UserUpdatePut$Json(params: {

    /**
     * The requested API version
     */
    'api-version': string;
    body?: User
  }): Observable<User> {

    return this.apiV1UserUpdatePut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation apiV1UserIsAdminGet
   */
  static readonly ApiV1UserIsAdminGetPath = '/api/v1/User/IsAdmin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UserIsAdminGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserIsAdminGet$Plain$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiV1UserIsAdminGetPath, 'get');
    if (params) {
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UserIsAdminGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserIsAdminGet$Plain(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<boolean> {

    return this.apiV1UserIsAdminGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1UserIsAdminGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserIsAdminGet$Json$Response(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiV1UserIsAdminGetPath, 'get');
    if (params) {
      rb.query('api-version', params['api-version'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1UserIsAdminGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1UserIsAdminGet$Json(params: {

    /**
     * The requested API version
     */
    'api-version': string;
  }): Observable<boolean> {

    return this.apiV1UserIsAdminGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
