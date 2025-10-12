import {
  Truck,
  CheckCircle,
  MessageCircle,
  Package,
  PackageSearch,
} from "lucide-react";

const timelineData = [
  {
    step: "Request Your Parcel",
    description:
      "Submit your parcel details, pickup location, and the system will calculate the delivery cost.",
    icon: Package,
  },
  {
    step: "Wait for Approval",
    description:
      "Approving takes a couple of hours and you will be notified upon the approval of your parcel.",
    icon: PackageSearch,
  },
  {
    step: "Delivery man Assignment",
    description:
      "We assign a trusted delivery person and Approve your request to the receiver.",
    icon: Truck,
  },
  {
    step: "Delivery Contact",
    description:
      "The delivery person contacts the receiver and prepares for pickup or drop-off.",
    icon: MessageCircle,
  },
  {
    step: "Successful Delivery",
    description:
      "Your parcel is delivered safely and on time. Satisfaction guaranteed!",
    icon: CheckCircle,
  },
];

const Process = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto md:pb-16">
        <h2 className="text-4xl font-semibold text-gray-900">Our Process</h2>

        <div className="mx-auto py-12 md:py-20 px-6">
          <div className="relative ml-6">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 inset-y-0 border-l-2 border-green-300 transform md:-translate-x-1/2" />
            {timelineData.map((item, index) => {
              // Check if the index is even (0, 2, 4...) -> Content on the right (default for small screens)
              const isContentOnRight = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative pb-10 last:pb-0 flex ${
                    // Reverse the flex order on medium screens for odd items (content on the left)
                    isContentOnRight ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Icon - Centered on medium screens */}
                  <div
                    className={`absolute bg-white left-px -translate-x-1/2 md:left-1/2 md:transform-none md:-translate-x-1/2 p-2 border-2 border-primary/40 flex items-center justify-center rounded-full ring-8 ring-background z-10 ${
                      // Adjust icon position on small screens for left-aligned content
                      isContentOnRight ? "md:ml-0" : "md:mr-0"
                    }`}
                  >
                    <item.icon
                      size={30}
                      className="text-primary relative z-20"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`pt-1 space-y-2 w-full md:w-1/2 ${
                      // Default small screen padding is 'pl-10'
                      isContentOnRight
                        ? "pl-10 md:pl-0 md:pr-12" // Content on the right: remove default padding, add right padding
                        : "pl-10 md:pl-12 md:pr-0" // Content on the left: keep default padding (only for small screen), add left padding on medium
                    }
                  ${
                    // Align text to the right when content is on the left side
                    !isContentOnRight ? "md:text-right" : ""
                  }
                `}
                  >
                    {/* Pushing the content to the left side on odd indices for medium screens */}
                    {!isContentOnRight && (
                      <div className="hidden md:block w-full" />
                    )}

                    <h3 className="text-xl font-medium tracking-[-0.015em]">
                      {item.step}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
