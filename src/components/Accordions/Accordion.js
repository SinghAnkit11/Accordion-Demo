import React from 'react';
import './Accordion.css';
import {Questions} from './List';
import AccordionItem from './AccordionItems';

const Accordion = () => {
  return (
    <>
    <div className='accordion_container'>
        <div className='acc_div'>
        {Questions.map((question)=>{
            const {id} = question;
            return <AccordionItem key={id} {...question} />
        })}  
        
        </div>
    </div>
    </>
  )
}

export default Accordion;