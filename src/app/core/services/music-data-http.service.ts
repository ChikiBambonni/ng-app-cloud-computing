import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@environment';
// import { BaseApi } from '@core/utils';
// import {
//   IUser,
//   IPaginationOptions,
//   IComponentResponse,
//   IPagination,
//   IDictionary,
//   IUsersHttp,
// } from '@core/interfaces';

// @Injectable()
// export class UsersHttpService extends BaseApi implements IUsersHttp {
//   private musicDataUrl = `${environment.mapi}/items`;

//   constructor(private http: HttpClient) {
//     super();
//   }

//   getUsers(
//     options: IPaginationOptions
//   ): Observable<IComponentResponse<IPagination<IUser>>> {}
// }
