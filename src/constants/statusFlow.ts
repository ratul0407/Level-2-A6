/* eslint-disable erasable-syntax-only/enums */
export enum Status {
  REQUESTED = "REQUESTED",
  APPROVED = "APPROVED",
  PICKED_UP = "PICKED_UP",
  DISPATCHED = "DISPATCHED",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  DELIVERED = "DELIVERED",
  FAILED_DELIVERY = "FAILED_DELIVERY",
  RETURNED = "RETURNED",
  CANCELLED = "CANCELLED",
}

export const statusFlow: Record<Status, Status[]> = {
  [Status.REQUESTED]: [Status.APPROVED, Status.CANCELLED],
  [Status.APPROVED]: [Status.PICKED_UP, Status.CANCELLED],
  [Status.PICKED_UP]: [Status.DISPATCHED, Status.CANCELLED],
  [Status.DISPATCHED]: [Status.OUT_FOR_DELIVERY, Status.CANCELLED],
  [Status.OUT_FOR_DELIVERY]: [
    Status.DELIVERED,
    Status.FAILED_DELIVERY,
    Status.CANCELLED,
  ],
  [Status.FAILED_DELIVERY]: [Status.RETURNED, Status.CANCELLED],
  [Status.RETURNED]: [],
  [Status.DELIVERED]: [],
  [Status.CANCELLED]: [Status.RETURNED],
};
