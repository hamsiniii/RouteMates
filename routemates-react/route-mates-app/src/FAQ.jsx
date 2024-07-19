import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "How does RouteMates work?",
    answer: "RouteMates is a carpool website that helps you find and connect with fellow students who share similar commuting routes. It can save you money on transportation costs and reduce your environmental impact."
  },
  {
    question: "Is it safe to carpool with other college students I meet on this website?",
    answer: "Your safety is our priority. We provide user profiles to help you make informed decisions. It's important to meet potential carpool partners in public places before your first trip and share your trip details with someone you trust."
  },
  {
    question: "Are there any additional benefits to carpooling as a college student besides saving money?",
    answer: "Yes, carpooling offers various benefits, including socializing with fellow students, sharing study materials, and networking opportunities. It can also make your college experience more environmentally friendly."
  },
  {
    question: "How do I report any issues or provide feedback about the carpooling experience for college students?",
    answer: "You can report issues or provide feedback through our website's Feedback option. We value your input and will address any concerns or suggestions promptly."
  },
  {
    question: "Is this website only for college students?",
    answer: "Yes, the website's features are only available for college students to make them feel safe while traveling with other students from the same institution."
  },
  {
    question: "How can I make my carpooling experience with RouteMates more eco-friendly and reduce carbon footprint?",
    answer: "Consider carpooling with more passengers to reduce the number of vehicles on the road. You can also encourage your carpool group to use fuel-efficient or electric vehicles if available."
  },
  {
    question: "How do I report any login issues or issues with my profile?",
    answer: "You can reach out to us through our website's contact option."
  },
  // Add more question-answer pairs below
  {
    question: "What are the requirements for creating a carpool group?",
    answer: "To create a carpool group, you need to sign up on our website using your college credentials. Once registered, you can create or join existing carpool groups within your college community."
  },
  {
    question: "Are there any charges or fees for using RouteMates?",
    answer: "No, RouteMates is completely free to use for college students. We aim to provide a convenient and cost-effective carpooling platform for students."
  },
  // Add more question-answer pairs as needed
];

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleToggle = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="faq-header">Frequently Asked Questions</div>
      <div className="faq-content">
        {faqData.map((item, index) => (
          <div key={index}>
            <div className="question" onClick={() => handleToggle(index)}>
              <span>{item.question}</span>
              <span>{selectedQuestion === index ? '-' : '+'}</span>
            </div>
            <div className={`answer ${selectedQuestion === index ? 'show' : ''}`}>
              <div className="answer-text">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
