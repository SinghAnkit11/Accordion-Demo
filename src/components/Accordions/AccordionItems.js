import React, { useState } from "react";

const AccordionItem = ({ques, ans}) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="acc_header">
        <button className={active ? 'deactive' : ''} onClick={() => { setActive(!active) }}>
          {active ? <i className="fa fa-minus"></i>:<i className="fa fa-plus"></i>}
        </button>
        <span className="acc_title">{ques}</span>
      </div>
      {active && <div className="acc_body">{ans}</div>}
    </>
  );
};

export default AccordionItem;
