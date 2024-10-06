import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';

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
  templateUrl: './music-data.component.html',
  styleUrl: './music-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicDataComponent {
  searchValue: string | undefined;

  musicItems = [
    {
      album: 'Different Class',
      band: 'Pulp',
      id: '2',
      releaseDate: '1995-10-30',
    },
    {
      album: 'Nevermind',
      band: 'Nirvana',
      id: '1',
      releaseDate: '1991-09-24',
    },
  ];

  clear(table: Table): void {
    table.clear();
    this.searchValue = '';
  }
}
