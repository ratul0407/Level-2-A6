import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LocationMap from "@/components/LocationMap";
import { Phone, Mail, Globe } from "lucide-react";

interface ContactProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

const contactSchema = z.object({
  name: z.string().min(3, { message: "Name is too short" }).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message cannot be empty" }),
});

const Contact = ({
  title = "Contact Us",
  description = "We’re here to help with any questions, feedback, or partnership inquiries. Reach out and we’ll get back to you soon.",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "parcelpro.com", url: "https://parcelpro.com" },
}: ContactProps) => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log(data);
    toast.success("Message sent successfully!");
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-[#f9f9f9]">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Section */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
                {title}
              </h1>
              <p className="text-gray-600 leading-relaxed max-w-md">
                {description}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-4 text-gray-900">
                Contact Details
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Phone className="text-primary w-5 h-5" />
                  <span>{phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-primary w-5 h-5" />
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="text-primary w-5 h-5" />
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <LocationMap />
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-8 md:p-10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john.doe@email.com"
                          type="email"
                          {...field}
                          className="focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Parcel Delivery Inquiry"
                          {...field}
                          className="focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message here..."
                          className="resize-none min-h-[150px] focus-visible:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-[#00b84a] text-white text-lg font-medium py-5 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
