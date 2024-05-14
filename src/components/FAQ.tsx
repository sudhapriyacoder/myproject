import React, { useState } from 'react';
import "../../src/App.css";

function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
      isOpen: false,
    },
    {
      question: 'How do you install React?',
      answer: 'You can install React using npm or yarn: npm install react or yarn add react',
      isOpen: false,
    },
    {
      question: 'What are the main features of React?',
      answer: 'Some main features of React include component-based architecture, virtual DOM, and JSX syntax.',
      isOpen: false,
    },
    {
        question: 'Is equity safer than Mutual fund investment',
        answer: 'No, Mutual funds are considered more safe as they are handled by proffesionals.',
        isOpen: false,
      }
  ]);

  const toggleFAQ = (index:any) => {
    const newFaqs = [...faqs];
    newFaqs[index].isOpen = !newFaqs[index].isOpen;
    setFaqs(newFaqs);
  };

  return (
    <>
    <h1>Frequently Asked Questions</h1>
    <div className="faq">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className={faq.isOpen ? 'arrow-up' : 'arrow-down'}>▼</span>
          </div>
          {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
    </>
  );
}

export default FAQ;