import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import {
  BackendHttpError,
  ComponentResponse,
  ErrorResponse,
} from '@core/interfaces';

export abstract class BaseHttpUtils {
  protected getRequestParams(params: {
    [keys: string]: string | null;
  }): HttpParams {
    let requestParams: HttpParams = new HttpParams();

    if (params) {
      Object.keys(params)
        .filter(
          (key: string) => params[key] !== undefined && params[key] !== null
        )
        .forEach((key: string) => {
          if (params[key]) {
            requestParams = this.updateParams(requestParams, key, params[key]);
          }
        });
    }

    return requestParams;
  }

  protected updateParams(
    base: HttpParams,
    key: string,
    value: string
  ): HttpParams {
    return base.set(key, value);
  }
}

export abstract class BaseHttpApi extends BaseHttpUtils {
  protected parseError(e: HttpErrorResponse): BackendHttpError | null {
    try {
      return JSON.parse(e.error);
    } catch {
      return null;
    }
  }

  protected getHttpFetchError(response: HttpErrorResponse): ErrorResponse {
    return {
      errorCode: 1,
      errorMessage: 'Error while fetching.',
      body: this.parseError(response),
    };
  }

  protected getSuccessBody<T>(body: T): ComponentResponse<T> {
    return {
      value: body,
      error: null,
    };
  }

  protected getErrorBody<T>(response: HttpErrorResponse): ComponentResponse<T> {
    return {
      value: null,
      error: this.getHttpFetchError(response),
    };
  }
}
