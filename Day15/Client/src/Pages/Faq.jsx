import React, { useState } from 'react';
import '../Assets/Faq.css'; 

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How do I place an order?',
      answer:
        'To place an order, simply browse our website or mobile app, select the products you want to purchase, add them to your cart, and proceed to checkout. Follow the on-screen instructions to complete your order.',
    },
    {
      question: 'What are the payment options?',
      answer:
        'We accept various payment methods, including credit/debit cards, digital wallets, and cash on delivery. You can choose your preferred payment option during the checkout process.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Delivery times may vary depending on your location. We strive to deliver your order as quickly as possible. You can check the estimated delivery time for your area during checkout.',
    },
    {
      question: 'Can I track my order?',
      answer:
        'Yes, you can track your order\'s status through our website or app. You will receive updates on the status of your order, including when it\'s out for delivery.',
    },
    {
      question: 'What if I receive damaged or incorrect items?',
      answer:
        'If you receive damaged or incorrect items, please contact our customer support team immediately. We will arrange for a replacement or refund as per our policies.',
    },
  ];

  const defaultQuestion = 'Welcome to our FAQ section';
  const defaultAnswer = 'Please select a question to view the answer.';

  return (
    <div className='faq'>
      <h1>Frequently Asked Questions</h1>

      {faqData.map((item, index) => (
        <div className='faq-section' key={index}>
          <h2 onClick={() => toggleAnswer(index)} className={activeIndex === index ? 'active' : ''}>
            {item.question}
          </h2>
          {activeIndex === index && <p>{item.answer}</p>}
        </div>
      ))}

      <div className='faq-section'>
        <h2 onClick={() => setActiveIndex(null)} className={activeIndex === null ? 'active' : ''}>
          {defaultQuestion}
        </h2>
        {activeIndex === null && <p>{defaultAnswer}</p>}
      </div>
    </div>
  );
}

export default Faq;
