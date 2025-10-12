import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { role } from "@/constants/role";
import { useGetAllUsersQuery } from "@/redux/features/auth/auth.api";
import { useApproveParcelMutation } from "@/redux/features/parcel/parcel.api";
import { IParcel } from "@/types/response/parcel";
import { useState } from "react";
import { toast } from "sonner";
const AssignParcelModal = ({
  parcel,
  closeDropdown,
}: {
  parcel: IParcel;
  closeDropdown: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [approveParcel, { isLoading }] = useApproveParcelMutation();
  const { data } = useGetAllUsersQuery({
    role: role.delivery_personnel,
  });
  const deliveryMens = data?.data;

  const handleAssign = async (id: string) => {
    try {
      const res = await approveParcel({
        data: { deliveryDriver: id },
        tracking_id: parcel.trackingId,
      }).unwrap();
      if (res.success) {
        toast.success("Parcel approved and assigned successfully");
      }
      setOpen(false);
      closeDropdown();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        disabled={parcel.currentStatus !== "REQUESTED"}
        className="block text-sm ml-2 disabled:opacity-50"
      >
        Assign Delivery
      </DialogTrigger>
      <DialogContent className="md:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Assign Delivery for {parcel?.name}</DialogTitle>
          <DialogDescription>
            Please choose a delivery man and then confirm delivery request
          </DialogDescription>
        </DialogHeader>
        <div>
          <Table>
            <TableCaption>A list of all the delivery personnel</TableCaption>
            <TableHeader>
              <TableRow className="*:text-center">
                <TableHead>Email</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Parcel Delivered</TableHead>
                <TableHead>Division</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveryMens?.map(
                (men: {
                  _id: string;
                  email: string;
                  parcels: string[];
                  name: string;
                  address: { division: string };
                }) => (
                  <TableRow key={men._id} className="text-center">
                    <TableCell className="font-medium">{men.email}</TableCell>
                    <TableCell>{men.parcels?.length}</TableCell>
                    <TableCell>{men.name}</TableCell>
                    <TableCell>{men?.address.division}</TableCell>
                    <TableCell>
                      <Button
                        disabled={isLoading}
                        onClick={() => handleAssign(men._id)}
                        variant={"outline"}
                      >
                        Choose
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignParcelModal;
