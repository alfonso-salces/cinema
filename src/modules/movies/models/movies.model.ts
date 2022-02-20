export interface Movie {
  id: number;
  title: string;
  description: string;
  companyId: number;
  duration: number;
}

/**
 * @params actorId, companyId
 */
export type MovieQueryParams = {
  [key: string]: string;
};
