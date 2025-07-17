import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Who can post a task on Askit?",
    answer: "Any verified college student can post tasks or offer services. We verify student status through college email addresses and student ID verification to maintain a trusted community."
  },
  {
    question: "Are the students on Askit verified?",
    answer: "Yes! All students go through our verification process using their college email and student credentials. This ensures you're always connecting with genuine students from your campus community."
  },
  {
    question: "How do I know my task will be done well?",
    answer: "Our platform features student profiles with skills, ratings, and reviews from previous tasks. You can also communicate directly before hiring to ensure they're the right fit for your needs."
  },
  {
    question: "Is payment handled securely?",
    answer: "Absolutely. We use secure payment gateways and hold payments in escrow until tasks are completed satisfactorily. This protects both task posters and service providers."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Got <span className="text-primary">Questions?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about Askit India
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;