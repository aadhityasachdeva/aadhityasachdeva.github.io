import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Who can join Askit?",
    answer: "Any college student in India can join Askit as a service provider to earn using their skills. If you're someone who needs help with everyday tasks, academic work, or creative projects, you can join as a service requester. We're currently beta testing in select cities, so early users will get exclusive access and benefits."
  },
  {
    question: "How do payments work?",
    answer: "Currently, payments are made directly via UPI — there is no in-app payment gateway yet. To ensure genuine transactions, a task cannot be marked as complete unless both the service provider and the requester confirm it. This mutual agreement system helps maintain trust, fairness, and accountability for both sides."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, absolutely. At Askit, we take data privacy seriously. All user data is encrypted and securely stored, and we never share your personal information with third parties without consent. We also verify users to maintain a safe and trusted community."
  },
  {
    question: "What incentives do beta testers get?",
    answer: "Beta testers get priority access, faster task matching, and a chance to be part of our exclusive feedback circle - influencing how the platform evolves. Plus, early users will be recognized as founding members and may receive exclusive perks once we launch publicly."
  },
  {
    question: "When will Askit launch publicly?",
    answer: "We're currently testing in Delhi NCR and Mumbai, refining the experience with real users. The official public launch is planned for later this year — and beta users will get early access to all upcoming features."
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