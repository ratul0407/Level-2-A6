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
import { useCancelParcelsMutation } from "@/redux/features/parcel/parcel.api";
import { IParcel } from "@/types/response/parcel";
import { useForm } from "react-hook-form";
const CancelParcelModal = (parcel: IParcel) => {
  const form = useForm();
  const [cancelParcel] = useCancelParcelsMutation();

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
            <form>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
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
            </form>
          </Form>
          <Button className="bg-red-500 hover:bg-red-300 hover:cursor-pointer">
            Delete
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CancelParcelModal;
