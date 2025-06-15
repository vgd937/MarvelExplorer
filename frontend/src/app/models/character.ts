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
  comics?: {
    available: number;
    collectionURI: string;
    items: { resourceURI: string; name: string }[];
    returned: number;
  };
  events?: {
    available: number;
    collectionURI: string;
    items: { resourceURI: string; name: string }[];
    returned: number;
  };
}
