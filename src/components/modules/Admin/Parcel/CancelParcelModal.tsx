/* eslint-disable @typescript-eslint/no-explicit-any */
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
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { parcelStatus } from "@/constants/parcelStatus";
import { useCancelParcelsMutation } from "@/redux/features/parcel/parcel.api";
import { IParcel } from "@/types/response/parcel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
const CancelParcelModal = ({
  parcel,
  button = false,
}: {
  parcel: IParcel;
  button: boolean;
}) => {
  console.log(parcel?.trackingId);
  const cancelSchema = z.object({
    parcel_name: z.string(),
  });
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof cancelSchema>>({
    resolver: zodResolver(cancelSchema),
    defaultValues: {
      parcel_name: "",
    },
  });
  const [cancelParcel] = useCancelParcelsMutation();
  form.watch();
  const onSubmit = async (data: z.infer<typeof cancelSchema>) => {
    console.log(data);
    const toastId = toast.loading("Loading.....");
    try {
      const res = await cancelParcel({
        tracking_id: parcel?.trackingId,
        data: { status: parcelStatus.cancelled },
      }).unwrap();
      console.log(res);
      if (res.success) {
        toast.info("Parcel has been cancelled", { id: toastId });
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message, { id: toastId });
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        disabled={
          parcel.currentStatus === "CANCELLED" ||
          parcel.currentStatus === "DELIVERED" ||
          parcel.currentStatus === "RETURNED"
        }
        className={`${
          !button && "disabled:opacity-50 ml-2 block text-sm"
        } bg-red-800 text-white px-1 py-1 rounded-sm disabled:bg-red-200`}
      >
        Cancel
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>are you sure you want to delete the parcel?</DialogTitle>
          <DialogDescription>
            Type in the parcel name to delete it.
          </DialogDescription>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="parcel_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>To delete type "{parcel.name}" below</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="enter the parcel name"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is a field for the parcel name
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={parcel.name !== form.getValues("parcel_name")}
                className="bg-red-400 text-white  border border-red-400 hover:text-black hover:bg-red-400 hover:cursor-pointer disabled:bg-white disabled:text-red-500"
                variant="outline"
              >
                Delete
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CancelParcelModal;
