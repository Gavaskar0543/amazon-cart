import { useState } from "react";
import { addnewPoduct } from "../Action";

function AddProduct({store}){
  const [title,setTitle] = useState('');
  const [price,setPrice] = useState(0);
  const [url,setUrl] = useState('');
  const [id,setId] = useState(0);
  
  const {list} = store.getState();
  let length = list.length-1;
  const handlePrice = (e)=>{
    setPrice(e.target.value);
  }
  const handleTitle = (e)=>{
    setTitle(e.target.value);
  }
  const handleUrl = (e)=>{
    setUrl(e.target.value);
  }
  const handleSubmit = () => {
    setId(id+1);

    store.dispatch(addnewPoduct({
      id:id,
      title:title,
      price:price,
      image:url
    }))

    setUrl('');
    setPrice(0);
    setTitle('');
   
  }
    return(
   
        
         <div>
         <form className="max-w-sm mx-auto p-6 bg-white rounded shadow-md">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
      Title
    </label>
    <input
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="title"
      type="text"
      value={title}
      placeholder="Enter Product Title"
      onChange={handleTitle}
    />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" for="price">
      Price
    </label>
    <input
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="Price"
      type="price"
      value={price}
      placeholder="Enter Price"
      onChange={handlePrice}
    />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" for="Quantity">
    Image url
    </label>
    <input
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="Quantity"
      type="text"
      value={url}
      placeholder="Enter url!"
      onChange={handleUrl}
    />
  </div>
  <div className="flex items-center justify-between">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={handleSubmit}
    >
      Add to Go!
    </button>
    
         </div>
         </form>
        </div>
       
    )
}
export default AddProduct;