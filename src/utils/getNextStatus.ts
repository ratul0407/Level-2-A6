import { Status, statusFlow } from "@/constants/statusFlow";

export function getNextStatus(current: Status): Status | null {
  const nextStatuses = statusFlow[current]?.filter(
    (s) => s !== Status.CANCELLED
  );
  return nextStatuses?.[0] ?? null;
}
