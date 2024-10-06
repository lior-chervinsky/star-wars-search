export interface SearchResultInterface {
  count: number;
  next: string;
  previous: string;
  results: Array<
    | PeopleResult
    | FilmsResult
    | PlanetsResult
    | StarshipsResult
    | VehiclesResult
  >;
  searchMetadata: { searchTerm: string; category: string };
};

export interface VehiclesResult {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: Array<any>;
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface StarshipsResult {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: Array<any>;//
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface PlanetsResult {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: Array<string>;
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface PeopleResult {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<any>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface FilmsResult {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  created: string;
  edited: string;
  url: string;
}
