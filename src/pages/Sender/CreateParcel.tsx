import ConfirmParcelModal from "@/components/ConfirmParcelModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
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
    return setParcelInfo(parcelData);
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-muted/40 py-10">
      <div className="w-full max-w-3xl">
        <Card className="shadow-xl border rounded-2xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold">
              Create a Parcel
            </CardTitle>
            <CardDescription>
              It will be delivered before you even know it!
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* PARCEL INFO */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg  text-gray-500 ">
                    Parcel Information
                  </h3>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Parcel Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter a name for your parcel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* RECEIVER INFO */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg  text-gray-500 ">
                    Receiver Information
                  </h3>

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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* DELIVERY ADDRESS */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg  text-gray-500 ">
                    Delivery Address
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Division */}
                    <FormField
                      control={form.control}
                      name="division"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Division</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Division" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.values(division)?.map((item) => (
                                <SelectItem key={item} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* City */}
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter city" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* ZIP */}
                    <FormField
                      control={form.control}
                      name="zip"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zip Code</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter zip code"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Street */}
                    <FormField
                      control={form.control}
                      name="street"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter street address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* WEIGHT */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg  text-gray-500 ">
                    Parcel Details
                  </h3>

                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Parcel Weight (kg)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter weight in kg"
                            type="number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full bg-custom-red">
                  Submit
                </Button>

                <ConfirmParcelModal
                  open={open}
                  setOpen={setOpen}
                  parcelData={parcelInfo}
                />
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateParcel;
