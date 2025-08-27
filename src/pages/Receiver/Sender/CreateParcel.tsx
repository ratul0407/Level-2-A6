import ConfirmParcelModal from "@/components/ConfirmParcelModal";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { division } from "@/constants/division";
import { cn } from "@/lib/utils";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const createParcelSchema = z.object({
  name: z.string(),
  receiver: z.email(),
  division: z.enum(Object.values(division), {
    error: "Please select one from the drop down",
  }),
  zip: z
    .string({ error: "Required" })
    .min(4, { error: "at least 4 characters" })
    .max(4, { error: "at least 4 characters" }),
  city: z.string(),
  street: z.string().min(3, { error: "Invalid street address" }),
  weight: z.string(),
});
const CreateParcel = () => {
  const [parcelInfo, setParcelInfo] = useState({});
  const [open, setOpen] = useState(false);

  const { data: senderData } = useGetMeQuery(undefined);
  const senderDivision = senderData?.data?.data?.address?.division;

  const form = useForm<z.infer<typeof createParcelSchema>>({
    resolver: zodResolver(createParcelSchema),
    defaultValues: {
      name: "",
      receiver: "",
      division: "",
      zip: undefined,
      city: "",
      street: "",
      weight: "0",
    },
  });
  // const formValues = form.watch();
  console.log(form);
  const onSubmit = async (data: z.infer<typeof createParcelSchema>) => {
    const { division, street, city, zip, ...rest } = data;
    const parcelData = {
      ...rest,
      deliveryLocation: {
        division,
        street,
        city,
        zip: Number(zip),
      },
      sameDivision: senderDivision === data?.division,
      weight: Number(data?.weight),
    };
    setOpen(true);
    console.log(parcelData);
    return setParcelInfo(parcelData);
  };
  return (
    <div className="min-h-screen min-w-full grid justify-center items-center">
      <div className="max-w-xl">
        <div className="flex flex-col  justify-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create a Parcel</h1>
          <p className="text-muted-foreground text-sm text-balance">
            It will be delivered before you even know it!
          </p>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn(" flex flex-col gap-4 justify-center px-12")}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parcel Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="enter a name for your parcel"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="sr-only">
                        This is a field for the name of the parcel
                      </FormDescription>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="receiver"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Receiver Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john.doe@company.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="sr-only">
                        This is a field for the receiver email
                      </FormDescription>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />

                <div className="space-y-3">
                  <h3 className="text-left text-muted-foreground">
                    Delivery address
                  </h3>
                  <FormField
                    control={form.control}
                    name="division"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Division</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="w-full">
                            <SelectTrigger>
                              <SelectValue placeholder="Select Division" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="w-full">
                            {Object.values(division)?.map((item: string) => (
                              <SelectItem key={item} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription className="sr-only">
                          This is a field for the division select input
                        </FormDescription>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-3">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="enter city"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="sr-only">
                            This is a field for the city input
                          </FormDescription>
                          <FormMessage className="text-left" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zip"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Zip Code</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="enter zip code"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="sr-only">
                            This is a field for the zip code input
                          </FormDescription>
                          <FormMessage className="text-left" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="enter street address"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="sr-only">
                          This is a field for the street address input
                        </FormDescription>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parcel Weight</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="enter the weight in kg"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Enter your parcels weight
                      </FormDescription>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />

                <Button type="submit">submit</Button>
                <ConfirmParcelModal
                  open={open}
                  setOpen={setOpen}
                  parcelData={parcelInfo}
                />
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div>
        {/* <h3>A parcel from, {senderData?.data?.data?.name}</h3>
        <p>To: {formValues.receiver}</p>
        <p>Estimated Delivery Time: </p> */}
      </div>
    </div>
  );
};

export default CreateParcel;
