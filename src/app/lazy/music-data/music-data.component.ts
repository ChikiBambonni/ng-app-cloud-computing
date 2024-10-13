import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { finalize, Observable, of, switchMap, tap } from 'rxjs';

import { BaseDataComponent } from '@core/abstractions';
import { ComponentResponse } from '@core/interfaces';

import {
  MusicDataHttpRepository,
  MusicDataRepository,
} from './music-data.repository';
import { MusicDataHttpService } from './music-data-http.service';
import { MusicData } from './music-data.interfaces';

@Component({
  selector: 'app-music-data',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    ButtonModule,
  ],
  providers: [
    MusicDataHttpService,
    {
      provide: MusicDataRepository,
      useClass: MusicDataHttpRepository,
    },
  ],
  templateUrl: './music-data.component.html',
  styleUrl: './music-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MusicDataComponent extends BaseDataComponent {
  readonly repository = inject(MusicDataRepository);

  readonly musicData = toSignal(this.fetchMusicData());
  readonly searchValue = signal('');

  clear(table: Table): void {
    table.clear();
    this.searchValue.set('');
  }

  date = '2024-10-13T08:41:56.832Z';

  private fetchMusicData(): Observable<ComponentResponse<MusicData>> {
    return of(this.repository.getAll(false)).pipe(
      tap(() => {
        this.isLoading.set(true);
      }),
      switchMap((request) => request),
      finalize(() => {
        this.isLoading.set(false);
      })
    );
  }
}
