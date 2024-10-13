export interface MusicItem {
  album: string;
  band: string;
  id: string;
  releaseDate: string;
}

export interface MusicData {
  data: MusicItem[];
  date: string;
}
