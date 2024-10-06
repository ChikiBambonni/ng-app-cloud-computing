export interface BackendHttpError {
  error: string;
  message: string;
  path: string;
  status: number;
  timestamp: string | number;
}

export interface ErrorResponse {
  errorCode: number;
  errorMessage: string;
  body: BackendHttpError | null;
}

export interface ComponentResponse<T> {
  error: ErrorResponse | null;
  value: T | null;
}

export interface RequestParams {
  queryParams: { [key: string]: string };
  params: { [key: string]: string };
}
