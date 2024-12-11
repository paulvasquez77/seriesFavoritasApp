export interface FetchData {
  series: any;  
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
}

export interface FetchOneData {
  series: any;  
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  seasons: []
}

export interface SeasonFilter {
  name: string;
}

export interface Seasons {
  id: number
  name: string;
  season_number: number[];
  vote_average: number
}
