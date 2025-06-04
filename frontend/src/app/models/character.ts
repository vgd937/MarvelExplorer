export interface MarvelApiResponse {
  data: {
    results: MarvelCharacter[];
  };
}

export interface MarvelCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
