import { Button } from "@/components/ui/button";
import loginImg from "../assets/images/login-img.jpg";
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
import Password from "@/components/ui/Password";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import config from "@/config";
import { Link, useNavigate } from "react-router";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});
const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: unknown) => {
    console.log(data);
    try {
      const res = await login(data).unwrap();
      if (res.success) {
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };
  return (
    <div className="grid lg:grid-cols-2 grid-rows-1 min-h-svh lg: gap-12">
      <div className="relative hidden lg:block h-full ">
        <img
          src={loginImg}
          className="max-h-svh min-h-full object-cover min-w-full"
        />
      </div>

      <div className="flex flex-col  justify-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={cn(" flex flex-col gap-6 justify-center px-12")}
            >
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

              <Button className="dark:text-white" type="submit">
                Login
              </Button>
            </form>
          </Form>

          <div className="text-center text-sm mt-10">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="ml-1 underline underline-offset-4">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
