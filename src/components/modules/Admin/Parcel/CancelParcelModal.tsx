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
import { useForm } from "react-hook-form";
import z from "zod";
const CancelParcelModal = (parcel: IParcel) => {
  console.log(parcel?.trackingId);
  const cancelSchema = z.object({
    parcel_name: z.string(),
  });

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
    try {
      const res = await cancelParcel({
        tracking_id: parcel?.trackingId,
        data: { status: parcelStatus.cancelled },
      }).unwrap();
      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger
        disabled={
          parcel.currentStatus === "CANCELLED" ||
          parcel.currentStatus === "DELIVERED" ||
          parcel.currentStatus === "RETURNED"
        }
        className="disabled:opacity-50 ml-2 block text-sm"
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
