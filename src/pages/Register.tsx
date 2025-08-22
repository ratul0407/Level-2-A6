import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Password from "@/components/ui/Password";
// import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { division } from "@/constants/division";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { error: "Name is too short" })
      .max(50, { error: "Name is too big" }),
    email: z.email(),
    password: z
      .string()
      .min(6, { error: "password must be 6 characters long" }),
    confirmPassword: z
      .string()
      .min(6, { error: "confirm password did not match" }),
    phone: z
      .string({ error: "Phone number must be a string" })
      .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
        message: "Invalid BD phone number",
      }),
    division: z.enum(Object.values(division)),
    city: z.string({ error: "city should be string" }),
    zip: z
      .string({ error: "zip code must be in number" })
      .min(4, { error: "Zip code must be of 4 numbers" })
      .max(4, { error: "zip code must be of 4 numbers" }),

    street: z.string({ error: "street should be string" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });
const Register = () => {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      city: "",
      division: "",
      zip: "",
      street: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    console.log(data);
    const { division, city, zip, street, ...rest } = data;
    const userData = {
      ...rest,
      address: {
        division,
        city,
        zip: Number(zip),
        street,
      },
    };
    try {
      const res = await register(userData).unwrap();
      console.log(res);
      toast.success("Account created successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    console.log(userData);
  };
  return (
    <div className="grid justify-center items-center min-h-screen min-w-full">
      <div className="flex flex-col justify-center w-xl max-w-2xl min-w-lg min-h-screen">
        <div className="flex flex-col  justify-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            A few moments before you business skyrockets!
          </p>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn(" flex flex-col gap-6 justify-center px-12")}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="enter your name"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="sr-only">
                        This is a field for the name input
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john.doe@company.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="sr-only">
                        This is a field for the email input
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="enter phone number"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="sr-only">
                        This is a field for the phone input
                      </FormDescription>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
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
                      <FormMessage />
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
                        <FormMessage />
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
                        <FormMessage />
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        {/* <Input placeholder="******* " type="password" {...field} /> */}
                        <Password {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        This is a field for the password input
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Password {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        This is a field to confirm your password
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="dark:text-white" type="submit">
                  Login
                </Button>
              </form>
            </Form>

            <div className="text-center text-sm mt-10">
              Already have an account?{" "}
              <Link to="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative max-h-svh w-full">
        <img src={registerImg} className="max-h-svh w-full" />
      </div> */}
    </div>
  );
};

export default Register;
