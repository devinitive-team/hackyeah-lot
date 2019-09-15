export interface IEventImage {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}

export interface IEvent {
  name: string;
  url: string;
  images: IEventImage[];
  startTime: string;
}
