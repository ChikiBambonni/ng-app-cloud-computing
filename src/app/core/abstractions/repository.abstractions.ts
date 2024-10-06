import { Observable } from 'rxjs';
import { MusicItem } from '../interfaces';

export abstract class Repository<T> {
  abstract fetchAll(): void;
}

export abstract class MusicDataRepository extends Repository<MusicItem> {}
