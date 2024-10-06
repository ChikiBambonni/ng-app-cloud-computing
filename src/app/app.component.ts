import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { Table, TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    TableModule,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    ProgressBarModule,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
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
