import { useState } from 'react';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const questions = [
    {
      id: 1,
      question: 'What is IPTV and how does it work?',
      answer:
        'IPTV stands for Internet Protocol Television, which is a digital TV broadcasting system that uses internet protocol (IP) networks to deliver TV content. It works by delivering TV channels over the internet to your device, such as a computer, smartphone, or smart TV, using a media player software. The content is delivered through a high-speed broadband connection and can be watched live or on-demand.',
    },
    {
      id: 2,
      question: 'What are the benefits of using IPTV?',
      answer:
        'There are several benefits to using IPTV, including access to a wider range of channels and content, the ability to watch TV on multiple devices, the convenience of on-demand and catch-up TV, and often lower costs compared to traditional cable or satellite TV services.',
    },
    {
      id: 3,
      question: 'What kind of channels can I watch with IPTV?',
      answer:
        'We offer a wide range of channels, including sports, movies, news, and entertainment, as well as international channels from different countries.',
    },
  
    {
      id: 5,
      question: 'Do I need special equipment to use IPTV?',
      answer:
        'You may need a few things to use IPTV, such as a compatible device (such as a computer, smartphone, or smart TV), a high-speed internet connection, and a media player software..',
    },
    {
      id: 6,
      question: 'How much does IPTV cost?',
      answer:
        'The cost of IPTV varies depending on the Plan you choose.',
    },
    {
      id: 7,
      question: 'What kind of internet connection do I need to use IPTV?',
      answer:
        'You typically need a high-speed broadband internet connection. A faster connection will provide a better viewing experience.',
    },
    {
      id: 8,
      question: 'How can I set up IPTV on my device?',
      answer:
        'The setup process for IPTV varies depending on the device you want to use. we provide instructions on how to set up their service based on your devices.',
    },
    {
      id: 9,
      question: 'What kind of customer support is available for IPTV users?',
      answer:
        "We offer 24/7 support, our support is  through email or chat. we a  good customer support we ensure that any issues or questions can be resolved quickly and efficiently.",
    },
    {
      id: 10,
      question:
        'Can I use IPTV with my existing cable or satellite TV service?',
      answer:
        "IPTV is a separate service from traditional cable, so you don't need the cable any more",
    },
  ];

  const handleQuestionClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
      {questions.map((q, index) => (
        <div
          key={q.id}
          className="mb-4 max-w-xl mx-auto "
        >
          <button
            className="flex justify-between items-center w-full py-2 px-4 bg-yellow-300 text-yellow-700 font-semibold rounded-md transition duration-150 ease-in-out hover:bg-yellow-200 focus:outline-none focus:shadow-outline-gray"
            onClick={() => handleQuestionClick(index)}
          >
            <span>{q.question}</span>
            <svg
              className={`h-5 w-5 ${
                activeIndex === index ? 'transform rotate-180' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="bg-gray-100 py-2 px-4 mt-2 rounded-md">
              {q.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQSection;
