export interface IParcel {
  _id: string;
  name: string;
  senderInfo: SenderInfo;
  deliveryLocation: DeliveryLocation;
  sameDivision: boolean;
  sender: Sender;
  estimatedDeliveryDate: string;
  receiver: Receiver;
  currentStatus: string;
  trackingEvents: TrackingEvent[];
  weight: number;
  cost: number;
  createdAt: string;
  updatedAt: string;
  trackingId: string;
}

export interface SenderInfo {
  division: string;
  city: string;
  zip: number;
  street: string;
}

export interface DeliveryLocation {
  division: string;
  city: string;
  zip: number;
  street: string;
}

export interface Sender {
  _id: string;
  name: string;
}

export interface Receiver {
  _id: string;
  name: string;
}

export interface TrackingEvent {
  status: string;
  updatedBy: string;
  at: string;
}
