
import { useState } from "react";
import Section from "./Section";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-border last:border-0 animate-reveal">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-lg">{question}</h3>
        <span className="ml-4 flex-shrink-0 text-lime-500">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div
        className={cn(
          "transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "What are the school hours?",
      answer: "Our school day runs from 8:30 AM to 3:15 PM, Monday through Friday. We offer before-school care starting at 7:00 AM and after-school programs until 5:30 PM for families who need extended hours."
    },
    {
      question: "How do I enroll my child at Awono Bilogue?",
      answer: "To enroll your child, you can start by filling out our online application form on the Enrollment page. After submission, our admissions team will contact you to schedule a school tour and assessment. We accept applications year-round, but spots fill quickly."
    },
    {
      question: "What is the student-to-teacher ratio?",
      answer: "We maintain a low student-to-teacher ratio of 18:1 in our classrooms. Additionally, many classes have teaching assistants, effectively lowering the ratio further to ensure personalized attention for each student."
    },
    {
      question: "Do you provide transportation services?",
      answer: "Yes, we offer bus transportation within a 5-mile radius of the school. Our transportation service includes morning pickup and afternoon drop-off. There is an additional fee for this service, which can be discussed during enrollment."
    },
    {
      question: "What extracurricular activities do you offer?",
      answer: "We offer a wide range of extracurricular activities including sports, arts, music, coding, robotics, chess club, drama, and various language clubs. Activities vary by age group and change seasonally to provide diverse experiences."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <Section light id="faq">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4 animate-reveal">Frequently Asked Questions</h2>
            <p className="text-muted-foreground animate-reveal">
              Find answers to common questions about Awono Bilogue School.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-subtle border border-border/50 divide-y divide-border">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center animate-reveal">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <a
              href="/contact"
              className="text-lime-500 font-medium hover:text-primary/80 transition-colors"
            >
              Contact our admissions team
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;
