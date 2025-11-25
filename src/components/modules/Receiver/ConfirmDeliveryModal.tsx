/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { parcelStatus } from "@/constants/parcelStatus";
import { useConfirmDeliveryMutation } from "@/redux/features/parcel/parcel.api";
import { IParcel } from "@/types/response/parcel";
import { useState } from "react";
import { toast } from "sonner";
const ConfirmDeliveryModal = (parcel: IParcel) => {
  const [open, setOpen] = useState(false);
  const [confirmDelivery, { isLoading }] = useConfirmDeliveryMutation();

  const handleConfirmDelivery = async () => {
    try {
      const res = await confirmDelivery({
        data: { delivered: true },
        tracking_id: parcel?.trackingId,
      }).unwrap();
      if (res?.success) {
        toast.success("Delivery Confirmed");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        disabled={parcel?.currentStatus !== parcelStatus.out_for_delivery}
        className="block ml-2 text-sm disabled:opacity-50"
      >
        Confirm
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Delivery</AlertDialogTitle>
          <AlertDialogDescription>
            If you have received the parcel please confirm the delivery .
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isLoading}
            onClick={handleConfirmDelivery}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDeliveryModal;
