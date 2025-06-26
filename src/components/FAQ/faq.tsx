import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { items } from "@/consts/faq";
  
  

  
  const Faq = () => {
    return (
      <section className="py-16 mx-10">
        <div className="container">
          <h1 className="mb-4 text-2xl font-semibold md:mb-11 md:text-3xl">
            {"Frequently asked questions"}
          </h1>
          {items.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    );
  };
  
  export { Faq };
  