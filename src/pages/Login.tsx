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
import { Link } from "react-router";

const Login = () => {
  const form = useForm();
  const onSubmit = (data: unknown) => {
    console.log(data);
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
          {/* <div className="m-12 after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="text-muted-foreground relative z-30 px-2">
              Or continue with
            </span>
          </div> */}
          <div className="mx-12">
            <Button
              onClick={() => window.open(`${config.baseUrl}/auth/google`)}
              variant="outline"
              className="w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              Login with Google
            </Button>
          </div>
          <div className="text-center text-sm mt-10">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline underline-offset-4">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
