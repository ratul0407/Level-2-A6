import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading?: string;
  description?: string;
  items?: FaqItem[];
  supportHeading?: string;
  supportDescription?: string;
  supportButtonText?: string;
  supportButtonUrl?: string;
}

const faqItems = [
  {
    id: "faq-1",
    question: "How do I send a parcel?",
    answer:
      "To send a parcel, simply create an account, enter the sender and receiver details, choose your preferred delivery option, and schedule a pickup or drop it off at our nearest branch.",
  },
  {
    id: "faq-2",
    question: "How long does delivery take?",
    answer:
      "Delivery times vary depending on the destination. Most parcels are delivered within 1–3 business days for major cities and 3–5 business days for remote areas.",
  },
  {
    id: "faq-3",
    question: "Can I track my parcel?",
    answer:
      "Yes, every parcel comes with a unique tracking number. You can use it on our website or mobile app to see real-time updates on your shipment.",
  },
  {
    id: "faq-4",
    question: "What items are restricted from shipping?",
    answer:
      "We do not allow shipping of hazardous materials, illegal goods, perishable items, or fragile items without proper packaging. Please check our shipping policy for a full list of restricted items.",
  },
  {
    id: "faq-5",
    question: "What happens if my parcel is lost or damaged?",
    answer:
      "In the rare event that your parcel is lost or damaged, we offer compensation based on our delivery terms. Please contact our support team to file a claim.",
  },
  {
    id: "faq-6",
    question: "Do you offer cash on delivery (COD)?",
    answer:
      "Yes, we support cash on delivery for most locations. The amount will be collected from the receiver at the time of delivery.",
  },
  {
    id: "faq-7",
    question: "How much does shipping cost?",
    answer:
      "Shipping costs depend on the weight, size, and destination of the parcel. You can use our online shipping calculator to get an estimate before booking.",
  },
  {
    id: "faq-8",
    question: "Can I reschedule my delivery?",
    answer:
      "Yes, if your parcel is still in transit, you can request a reschedule through our website or customer support team.",
  },
  {
    id: "faq-9",
    question: "Do you deliver to rural or remote areas?",
    answer:
      "Yes, we deliver parcels all over the country, including rural and remote areas. Delivery times may be slightly longer for such locations.",
  },
  {
    id: "faq-10",
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via live chat, email, or our hotline number, available 7 days a week.",
  },
];

const Faq = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
}: Faq3Props) => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container space-y-16 mx-auto">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
