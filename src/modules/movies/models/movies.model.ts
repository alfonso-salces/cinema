import { Actor } from "src/modules/actors/models/actors.models";

export interface Movie {
  id: number;
  title: string;
  description: string;
  companyId: number;
  duration: number; // duration in minutes
  actors: Actor[];
  genres: Genre[];
  year: number;
  score: number;
  image: string;
}

/**
 * @params actorId, companyId
 */
export type MovieQueryParams = {
  [key: string]: string;
};

export interface Genre {
  id: number;
  name: string;
}
