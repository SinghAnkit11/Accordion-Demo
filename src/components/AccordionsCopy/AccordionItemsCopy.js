import React from 'react';

const AccordionItemCopy = ({ ques, ans, isActive, onToggle }) => {
  return (
    <>
      <div className="acc_header">
        <button className={isActive ? 'deactive' : ''} onClick={onToggle}>
          {isActive ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>}
        </button>
        <span className="acc_title">{ques}</span>
      </div>
      {isActive && <div className="acc_body">{ans}</div>}
    </>
  );
};

export default AccordionItemCopy;
