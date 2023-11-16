import React from "react";
import './App.css';
import Products from "./components/Products";
import productsList from "./components/ProductsList";
import Form from "./components/Form";
import MultiForm from "./components/MultipleForm";
import TodoApp from "./components/Todos/Todo";
import Counter from "./components/Counter";
// import Accordion from "./components/Accordions/Accordion";
import AccordionCopy from "./components/AccordionsCopy/AccordionCopy";

function App() {
  return (
    <>      
     { productsList.map((product)=> 
     <Products 
        key={product.pID} 
        proImage={product.image} 
        proName={product.pName} 
        proDesc={product.desc} 
        proPrice={product.price} 
        proStock={product.isAvailable} 
     /> 
     )}
     <Form />
     <MultiForm />
     <TodoApp />
     <Counter />
     {/* <Accordion /> */}
     <AccordionCopy />
    </>
  );
}

export default App;
