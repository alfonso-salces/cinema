export interface Movie {
  id: number;
  title: string;
  poster: null | string;
  genre: string[];
  year: number;
  duration: number;
  imdbRating: number;
  actors: number[];
  company?: number;
}

/**
 * @params actorId, companyId
 */
export type MovieQueryParams = {
  [key: string]: string;
};

export enum ViewMode {
  CREATE_MOVIE = 'create-movie',
  EDIT_MOVIE = 'edit-movie',
  READ_MOVIE_DETAIL = 'movie-detail',
}
