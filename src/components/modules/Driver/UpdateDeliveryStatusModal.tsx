import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";
import { Status } from "@/constants/statusFlow";

import { useUpdateParcelStatusMutation } from "@/redux/features/parcel/parcel.api";
import { IParcel } from "@/types/response/parcel";
import { getNextStatus } from "@/utils/getNextStatus";
import { Dialog } from "@radix-ui/react-dialog";
import { useState } from "react";
import { toast } from "sonner";
const UpdateDeliveryStatus = ({
  parcel,
  closeDropdown,
}: {
  parcel: IParcel;
  closeDropdown: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [statusChange, setStatusChange] = useState("");
  const [updateStatus, { isLoading }] = useUpdateParcelStatusMutation();
  const nextStatus = getNextStatus(parcel?.currentStatus as Status);

  const handleStatusChange = async (value: Status) => {
    setStatusChange(value);

    try {
      const res = await updateStatus({
        data: { status: value },
        tracking_id: parcel.trackingId,
      }).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success("Parcel created successfully!");
        setOpen(false);
        closeDropdown();
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="text-sm ml-2 block">
        Update Status
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="md:min-w-3xl">
          <DialogTitle>Update Parcel Status</DialogTitle>
        </DialogHeader>
        <div>
          {nextStatus === "PICKED_UP" ? (
            <div className="space-y-2">
              <p className="max-w-lg text-muted-foreground">
                The parcel is currently approved by your name if you have
                already picked it up confirm it
              </p>
              <Button
                className="text-black mt-6"
                onClick={() => handleStatusChange(nextStatus)}
              >
                confirm pickup
              </Button>
            </div>
          ) : nextStatus === "DISPATCHED" ? (
            <div className="space-y-2">
              <p className="max-w-lg text-muted-foreground">
                Confirm that you have dispatched the parcel
              </p>
              <Button
                onClick={() => handleStatusChange(nextStatus)}
                className="text-black mt-6"
              >
                confirm dispatch
              </Button>
            </div>
          ) : nextStatus === "OUT_FOR_DELIVERY" ? (
            <div className="space-y-2">
              <p className="max-w-lg text-muted-foreground">
                Confirm that the parcel is out for delivery
              </p>
              <Button
                onClick={() => handleStatusChange(nextStatus)}
                className="text-black mt-6"
              >
                Confirm
              </Button>
            </div>
          ) : nextStatus === "DELIVERED" ? (
            <div className="space-y-2">
              <p className="max-w-lg text-muted-foreground">
                Confirm Parcel Delivery
              </p>
              <Button
                onClick={() => handleStatusChange("DELIVERED" as Status)}
                className="text-black mt-6"
              >
                Delivery Successful
              </Button>
              <Button
                onClick={() => handleStatusChange("FAILED_DELIVERY" as Status)}
                value="FAILED_DELIVERY"
                variant={"destructive"}
                className=" ml-3"
              >
                Delivery Failed
              </Button>
            </div>
          ) : (
            <div>
              <p>There is nothing more for you to do!</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDeliveryStatus;
