import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { addDays, format, parse } from "date-fns";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useCreateParcelMutation } from "@/redux/features/parcel/parcel.api";
import { useNavigate } from "react-router";
interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  parcelData: {
    name: string;
    weight: number;
    deliveryLocation: {
      division: string;
      city: string;
      zip: number;
      street: string;
    };
    receiver: string;
    sameDivision: boolean;
  };
}

const ConfirmParcelModal = ({ open, setOpen, parcelData }: IProps) => {
  const navigate = useNavigate();
  const [createParcel] = useCreateParcelMutation();
  const today = new Date();
  const estimatedDeliveryDate = format(addDays(today, 7), "dd/MM/yy");
  console.log(today, estimatedDeliveryDate);
  let cost: number;
  if (parcelData.sameDivision) {
    if (parcelData.weight) {
      cost = Math.ceil(60 + parcelData.weight * 5);
    }
  } else {
    if (parcelData.weight) {
      cost = Math.ceil(100 + parcelData.weight * 7);
    }
  }
  console.log(
    "delvery date",
    parse(estimatedDeliveryDate, "dd/MM/yy", new Date()).toISOString()
  );

  const handleClick = async () => {
    // setParcelData(parcelData);
    const toastId = toast.loading("creating parcel....");
    try {
      const res = await createParcel({
        ...parcelData,
        estimatedDeliveryDate: parse(
          estimatedDeliveryDate,
          "dd/MM/yy",
          new Date()
        ).toISOString(),
        cost,
      }).unwrap();
      console.log(res);
      if (res.success) {
        toast.success(res?.message, { id: toastId });
        navigate("/sender/my-parcel");
      }
    } catch (error: unknown) {
      toast.error(error?.data?.message, { id: toastId });
      console.log(error);
    }
  };
  console.log(estimatedDeliveryDate);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Recheck Parcel Information</DialogTitle>
          <DialogDescription>
            Once you're done rechecking everything click on confirm parcel
          </DialogDescription>
          <div>
            <p>{parcelData?.name}</p>
            <p>{parcelData?.weight}</p>
            <p>{parcelData?.receiver}</p>
            <div>
              <p className="text-muted-foreground">Delivery Address: </p>
              <p>{parcelData?.deliveryLocation?.division}</p>
              <p>{parcelData?.deliveryLocation?.city}</p>
              <p>{parcelData?.deliveryLocation?.street}</p>
              <p>{parcelData?.deliveryLocation?.zip}</p>

              <p>
                Delivery Cost:{" "}
                {parcelData?.sameDivision
                  ? Math.ceil(60 + parcelData.weight * 5)
                  : Math.ceil(100 + parcelData.weight * 7)}
              </p>
              <p>Estimated Delivery Date: {estimatedDeliveryDate}</p>
            </div>
          </div>
          <Button onClick={handleClick}>Confirm Order</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmParcelModal;
