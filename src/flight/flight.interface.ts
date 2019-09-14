export interface ITotalPrice {
  price: number;
  basePrice: number;
  tax: number;
  currency: string;
}

export interface ITrip {
  duration: number;
  segments: ISegment[];
  fareType: string;
  price: number;
  id: number;
}

export interface ISegment {
  idInfoSegment: number;
  departureAirport: string;
  arrivalAirport: string;
  departureDate: string;
  arrivalDate: string;
  carrier: string;
  flightNumber: string;
  operationCarrier: string;
  equipment: string;
  duration: number;
  stopTime: number;
  status: any[];
  baggageForPax: any;
  scheduleChange: number;
}

export interface IFlight {
  offerId: number;
  totalPrice: ITotalPrice;
  outbound: ITrip;
  inbound: ITrip;
  url: string;
}
