function AddProduct(){
    return(
   
        
         <div>
         <form class="max-w-sm mx-auto p-6 bg-white rounded shadow-md">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
      Title
    </label>
    <input
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="title"
      type="text"
      placeholder="Enter Product Title"
    />
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
      Price
    </label>
    <input
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="Price"
      type="price"
      placeholder="Enter Price"
    />
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="Quantity">
    Quantity
    </label>
    <input
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="Quantity"
      type="price"
      placeholder="Enter Quantity"
    />
  </div>
  <div class="flex items-center justify-between">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Add to Go!
    </button>
    
         </div>
         </form>
        </div>
       
    )
}
export default AddProduct;