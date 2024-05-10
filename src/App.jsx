import { isValidElement, useState } from "react";
import Form from "./Form";
import { ToastContainer, toast } from 'react-toastify'
import { nanoid } from "nanoid";


const App = () => {

const [items,setItems] = useState([]);
const addItem = (item)=>{
 if (item!==''){
  
  try {
    
      const newItems = [...items,{name:item,prop:false,id:nanoid()}];
      setItems(newItems);
      
      toast.success('success')
    
    
  } catch (error) {
      toast.error('cannot add item to the list')
    
  }
} else {
  toast.error('please insert your item')

}}

console.log(items);
  return (
  <section className="section-center">
    <ToastContainer className="top-center"/>
    <Form items={items} addItem={addItem} setItems={setItems}/>
    </section>
)};

export default App;
