import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';

import { BaseDataComponent } from '@core/abstractions';

import {
  MusicDataHttpRepository,
  MusicDataRepository,
} from './music-data.repository';
import { MusicDataHttpService } from './music-data-http.service';

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
    ProgressBarModule,
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
})
export class MusicDataComponent extends BaseDataComponent {
  readonly searchValue = signal('');

  private readonly repository = inject(MusicDataRepository);

  // musicItems$ = this.repository.getAll(false);

  constructor() {
    super();

    effect(() => {
      console.log('effect');

      this.repository.getAll(false).subscribe(console.log);
    });
  }

  clear(table: Table): void {
    table.clear();
    this.searchValue.set('');
  }
}
