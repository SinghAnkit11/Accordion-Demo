import React, { useState } from 'react';
import './Accordion.css';
import { Questions } from './List';
import AccordionItemCopy from './AccordionItemsCopy';

const AccordionCopy = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleToggle = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="accordion_container">
      <div className="acc_div">
        {Questions.map((items) => {
          const { id } = items;
          return (
            <AccordionItemCopy
              key={id}
              isActive={activeItem === id}
              onToggle={() => handleToggle(id)}
              {...items}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AccordionCopy;
