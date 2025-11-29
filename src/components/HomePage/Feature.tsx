import { Timer, Zap, ZoomIn } from "lucide-react";

const Feature = () => {
  return (
    <section className="py-24  sm:py-12">
      <div className="container mx-auto">
        <p className="mb-4 text-sm text-muted-foreground lg:text-base">
          OUR VALUES
        </p>
        <h2 className="text-3xl font-medium lg:text-4xl">Why Choose Us?</h2>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          <div className="rounded-lg bg-custom-red p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-black">
              <Timer className="size-6 text-white" />
            </span>
            <h3 className="mb-2 text-xl font-medium ">Performance</h3>
            <p className="leading-7  text-white">
              We have provided service flawlessly over the last 3 years across
              all divisions in bangladesh.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <ZoomIn className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Quality</h3>
            <p className="leading-7 text-muted-foreground">
              99% of our parcels have been successfully Delivered. And we are
              available for contact 24/7
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <Zap className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Innovation</h3>
            <p className="leading-7 text-muted-foreground">
              We are always looking to improve our team and hiring talented
              brains that will help who will help us grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
