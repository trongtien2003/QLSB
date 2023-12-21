export class CreateFlightDto {
  arrivalTime: string;
  departureTime: string;
  availableSeat: number;
  destination: string;
  source: string;
  travelDate: Date;
  price: number;
  airlineId: string;
}
