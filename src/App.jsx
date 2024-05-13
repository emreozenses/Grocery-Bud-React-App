import { useState } from "react";
import Form from "./Form";
import { ToastContainer, toast } from 'react-toastify'
import { nanoid } from "nanoid";
import Items from "./Items";


const App = () => {

const [items,setItems] = useState([]);
const addItem = (item)=>{
 if (item!==''){
  
  try {
    
      const newItems = [...items,{name:item,completed:false,id:nanoid()}];
      setItems(newItems);
      
      toast.success('success')
    
    
  } catch (error) {
      toast.error('cannot add item to the list')
    
  }
} else {
  toast.error('please insert your item')

}}

const removeItem = (id)=>{
  
  const updatedItems = items.filter((item)=>{
    return item.id!==id;  
  })
  setItems(updatedItems);

}


  return (
  <section className="section-center">
    <ToastContainer className="top-center"/>
    <Form items={items} addItem={addItem} setItems={setItems}/>
    <Items items={items} removeItem={removeItem}/>
    </section>
)};

export default App;
