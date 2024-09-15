import { FormikValues, FormikErrors } from "formik";

export interface CampersResponse {
  items: Camper[];
  total: number;
}

export interface Camper {
  id: number;
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
  campers: Camper[];
  favorites: Camper[];
  currentItem: Camper | null;
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  totalCampers: number;
  hasNextPage: boolean;
}

export interface BooleanDetails {
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

export interface TextDetails {
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
}

export interface CamperGalleryProps {
  gallery: { original: string }[];
  isTabletOrMobile: boolean;
}

export interface SearchFormValues {
  location: string;
  form: string;
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

export interface BookingFormValues {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
}

export type IconKey =
  | "AC"
  | "bathroom"
  | "kitchen"
  | "TV"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water"
  | "transmission"
  | "engine";

export interface CustomDateFieldProps {
  field: {
    name: string;
    value: string | Date;
  };
  form: {
    setFieldValue: (field: string, value: string | Date) => void;
    validateField: (field: string) => void;
    errors: FormikErrors<FormikValues>;
    touched: Record<string, boolean>;
  };
  placeholder?: string;
}

export interface ReviewProps {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export type EngineValue = "diesel" | "hybrid" | "petrol" | undefined;

export type FilterValue = string | number | boolean;
export type Filters = Record<string, FilterValue>;

export interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface FavoritesModalProps {
  favorites: {
    id: number;
    name: string;
  }[];
  isVisible: boolean;
  onClose: () => void;
}
