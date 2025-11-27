import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CareersPage() {
  return (
    <div className="w-full flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Become a Delivery Partner and Start Earning Today
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Join our reliable delivery network. Work with flexible hours, earn
            competitive rates, and be part of a fast‑growing logistics platform.
          </p>
          <Button size="lg" asChild>
            <a href="/register">Register Now</a>
          </Button>
        </div>

        {/* Image Placeholder */}
        <div className="relative w-full h-72 md:h-96 bg-muted rounded-xl flex items-center justify-center">
          <span className="text-muted-foreground">
            Delivery Hero Image Here
          </span>
        </div>
      </section>

      <Separator />

      {/* Why Join Us */}
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">
          Why Become a Delivery Partner?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Flexible Working Hours</CardTitle>
            </CardHeader>
            <CardContent>
              Choose your own schedule and work when it's convenient for you.
              <div className="mt-4">
                <Button asChild>
                  <a href="/register">Learn More</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Good Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              Earn competitive delivery fees with bonuses and incentives.
              <div className="mt-4">
                <Button asChild>
                  <a href="/register">Learn More</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Simple Registration</CardTitle>
            </CardHeader>
            <CardContent>
              Sign up easily with your basic information and start delivering.
              <div className="mt-4">
                <Button asChild>
                  <a href="/register">Learn More</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Requirements Section */}
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Basic Requirements</h2>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>What You Need</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>A smartphone with internet connection</li>
                <li>A valid national ID</li>
                <li>Vehicle (bike or cycle preferred)</li>
                <li>Willingness to deliver parcels responsibly</li>
              </ul>
              <Button className="mt-4" asChild>
                <a href="/register">Register Now</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Start earning with every delivery. Join our team of delivery partners
          today.
        </p>
        <Button size="lg" asChild>
          <a href="/register">Become a Delivery Partner</a>
        </Button>
      </section>
    </div>
  );
}
