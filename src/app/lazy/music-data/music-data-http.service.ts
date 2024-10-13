import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { environment } from '@environment';
import { BaseHttpApi } from '@core/abstractions';
import { ComponentResponse } from '@core/interfaces';

import { MusicData } from './music-data.interfaces';

@Injectable()
export class MusicDataHttpService extends BaseHttpApi {
  private readonly http = inject(HttpClient);
  private readonly musicDataUrl = `${environment.mapi}/items`;

  getAll(): Observable<ComponentResponse<MusicData>> {
    return this.http
      .get<MusicData>(this.musicDataUrl, {
        params: this.getRequestParams({}),
      })
      .pipe(
        map((res) => this.getSuccessBody(res)),
        catchError((error: HttpErrorResponse) =>
          of(this.getErrorBody<MusicData>(error))
        ),
        delay(1000)
      );
  }
}
