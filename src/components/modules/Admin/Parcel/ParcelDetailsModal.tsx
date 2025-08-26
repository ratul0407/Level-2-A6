import ParcelDetails from "@/components/ParcelDetails";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IParcel } from "@/types/response/parcel";
import { DialogTitle } from "@radix-ui/react-dialog";
const ParcelDetailsModal = ({
  parcel,
  open,
  setOpen,
}: {
  parcel: IParcel;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="text-sm ml-2">Show details</DialogTrigger>
      <DialogContent className="md:min-w-4xl">
        <DialogHeader className="md:min-w-3xl">
          <DialogTitle className="sr-only">Parcel Overview</DialogTitle>
          <ParcelDetails {...parcel} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ParcelDetailsModal;
