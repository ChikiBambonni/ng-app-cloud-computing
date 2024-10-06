import { signal } from '@angular/core';

import { ErrorResponse } from '@core/interfaces';

export abstract class BaseDataComponent {
  isLoading = signal(false);
  noDataToDisplay = signal(false);
  error = signal<ErrorResponse | null>(null);
}
