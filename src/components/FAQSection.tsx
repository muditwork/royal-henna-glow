import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "When should bridal mehndi be applied?", a: "Bridal mehndi should ideally be applied one day before the wedding ceremony. This gives the henna enough time to develop a deep, rich stain for the best color on your special day." },
  { q: "How much does bridal mehndi cost in Delhi?", a: "Our bridal mehndi packages start from ₹5,000 and vary depending on the design complexity, coverage area, and number of people. Contact us for a personalized quote!" },
  { q: "Do you provide doorstep service?", a: "Yes! We provide doorstep mehndi service across Delhi NCR. Our artist will come to your home, venue, hotel, or any location of your choice with all necessary materials." },
  { q: "How long does mehndi stain last?", a: "With proper care, our premium natural henna gives a deep stain that lasts 10-15 days. We also provide aftercare tips to ensure the best color development." },
  { q: "Do you use natural henna?", a: "Absolutely! We use only 100% natural, organic henna that is safe for all skin types. We never use chemical-based or black henna products." },
];

const FAQSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto max-w-3xl">
      <div className="text-center mb-12">
        <p className="font-body text-accent tracking-[0.25em] uppercase text-xs mb-3">FAQs</p>
        <h2 className="section-heading">Frequently Asked Questions</h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-background rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
          >
            <AccordionTrigger className="font-heading text-left text-base md:text-lg font-semibold text-primary hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-foreground/80 leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
