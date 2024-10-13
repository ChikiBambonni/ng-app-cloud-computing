import { inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Repository } from '@core/abstractions';
import { ComponentResponse } from '@core/interfaces';

import { MusicData } from './music-data.interfaces';
import { MusicDataHttpService } from './music-data-http.service';

export abstract class MusicDataRepository extends Repository<MusicData> {}

export class MusicDataHttpRepository extends MusicDataRepository {
  private readonly http = inject(MusicDataHttpService);

  override getAll(): Observable<ComponentResponse<MusicData>> {
    return this.http.getAll();
  }
}
