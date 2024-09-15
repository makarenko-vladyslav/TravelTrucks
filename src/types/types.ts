export interface CampersResponse {
  items: Camper[];
  total: number;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: Array<{
    thumb: string;
    original: string;
  }>;
  reviews: Array<{
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }>;
}

export interface CampersState {
  camper: Camper | null;
  items: Camper[];
  selectedCamper: Camper | null;
  loading: boolean;
  filters: Filters;
  favorites: string[];
  error: string | null;
  currentPage: number;
  itemsPerPage: number;
  lastPage: number;
}

export interface SearchFormValues {
  location: string;
  vehicleType: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}

export type FilterValue = string | number | boolean;
export type Filters = Record<string, FilterValue>;
