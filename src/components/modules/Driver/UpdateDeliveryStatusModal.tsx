/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
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
  const [note, setNote] = useState("");
  const [updateStatus, { isLoading }] = useUpdateParcelStatusMutation();
  const nextStatus = getNextStatus(parcel?.currentStatus as Status);

  const handleStatusChange = async (value: Status) => {
    try {
      const res = await updateStatus({
        data: { status: value, note: note },
        tracking_id: parcel.trackingId,
      }).unwrap();
      if (res?.success) {
        toast.success("Parcel Status Updated successfully!");
        setOpen(false);
        closeDropdown();
      }
    } catch (error: any) {
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

        <Input
          onChange={(e) => setNote(e.target.value)}
          maxLength={35}
          type="text"
          placeholder="add a little note (max 35 characters)"
          className="w-sm"
        />
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
                disabled={isLoading}
                onClick={() => handleStatusChange(nextStatus)}
                className="text-black mt-6"
              >
                Confirm
              </Button>
            </div>
          ) : nextStatus === "DELIVERED" ? (
            <div className="space-y-2">
              <p className="max-w-lg text-muted-foreground">
                Has the delivery failed? if yes then confirm that the Failed
                delivery
              </p>
              <Button
                onClick={() => handleStatusChange("FAILED_DELIVERY" as Status)}
                className="mt-6 bg-red-100 text-red-500 hover:bg-red-200"
              >
                Confirm Failed Delivery
              </Button>
            </div>
          ) : (
            <div>
              <p className="max-w-lg text-muted-foreground">
                There is nothing for you to do now
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDeliveryStatus;
