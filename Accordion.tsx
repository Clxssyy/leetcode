import { useState } from 'react';

export default function Accordion() {
  return (
    <div>
      <AccordionItem
        title='HTML'
        description={`The HyperText Markup Language or 
                      HTML is the standard markup language 
                      for documents designed to be displayed 
                      in a web browser.`}
      />
      <AccordionItem
        title='CSS'
        description={`Cascading Style Sheets is a style sheet 
                      language used for describing the presentation 
                      of a document written in a markup language such as
                      HTML or XML.`}
      />
      <AccordionItem
        title='JavaScript'
        description={`JavaScript, often abbreviated as JS, is a programming 
                      language that is one of the core technologies of the 
                      World Wide Web, alongside HTML and CSS.`}
      />
    </div>
  );
}

const AccordionItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='accordion-container'>
      <div
        className='accordion-header'
        onClick={() => setIsOpen((prev) => !prev)}>
        {title}{' '}
        <span
          aria-hidden={true}
          className={`accordion-icon ${
            isOpen ? '' : 'accordion-icon--rotated'
          }`}
        />
      </div>
      <div className={isOpen ? '' : 'hidden'}>{description}</div>
    </div>
  );
};
