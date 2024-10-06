import { Observable } from 'rxjs';

import { ComponentResponse } from '@core/interfaces';

export abstract class Repository<T> {
  abstract getAll(refetch: boolean): Observable<ComponentResponse<T[]>>;
}
