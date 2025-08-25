import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGetAllUsersQuery } from "@/redux/features/auth/auth.api";
import { IParcel } from "@/types/response/parcel";
const AssignParcelModal = (parcel: IParcel) => {
  const { data } = useGetAllUsersQuery({ role: "DELIVERY_PERSONNEL" });
  console.log(data);
  return (
    <Dialog>
      <DialogTrigger
        disabled={
          parcel.currentStatus === "CANCELLED" ||
          parcel.currentStatus === "DELIVERED" ||
          parcel.currentStatus === "RETURNED"
        }
        className="block text-sm ml-2 disabled:opacity-50"
      >
        Assign Delivery
      </DialogTrigger>
      <DialogContent className="md:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Assign Delivery for {parcel?.name}</DialogTitle>
          <DialogDescription>
            Please choose a delivery man and then confirm delivery request
          </DialogDescription>
        </DialogHeader>
        <div>
          <h3>Hello world</h3>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignParcelModal;
