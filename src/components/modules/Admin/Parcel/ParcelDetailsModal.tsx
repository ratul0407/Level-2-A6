import ParcelDetails from "@/components/ParcelDetails";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IParcel } from "@/types/response/parcel";
const ParcelDetailsModal = ({
  parcel,
  open,
  setOpen,
}: {
  parcel: IParcel;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log(parcel, "from modal");
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="text-sm ml-2">Show details</DialogTrigger>
      <DialogContent className="md:min-w-4xl">
        <DialogHeader className="min-w-3xl">
          <ParcelDetails {...parcel} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ParcelDetailsModal;
