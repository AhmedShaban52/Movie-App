// AccordianItem.js

import  { useState } from 'react';

const AccordianItem = ({ title, links }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`cursor-pointer ${accordionOpen ? 'bg-[#17384e]' : 'bg-[#000000]'} w-full text-white w-500 p-4 rounded-lg text-center active:text-black flex justify-between items-center px-6 relative duration-700`}
      >
        <span className='text-xl'>{title}</span>
        <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out relative text-slate-600 bg-[#000000] w-full rounded-lg text-sm ${
          accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {accordionOpen && (
          <div className="">
            <ul>
              {links?.map((link) => (
                <li key={link.link} className='list-footer'>{link.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordianItem;
