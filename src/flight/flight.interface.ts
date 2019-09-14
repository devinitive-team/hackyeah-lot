export interface Flight {
  origin: string[];
  destination: string[];
  departureDate: string[];
  returnDate: string;
  cabinClass: string;
  market: string;
  tripType: string;
  adt: number;
  c14: number;
  chd: number;
  inf: number;
  fromCache: boolean;
  fareType: string;
}
