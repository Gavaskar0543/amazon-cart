import React,{useEffect,useState} from 'react';
function Home(){
   const [data,setData] = useState('');
   useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const jsonData = await response.json();
         setData(jsonData);
         console.log("data",data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);
    return(
        <>
       <div className="mt-2">
        <h2 className="text-xl">Recomended Category</h2>
        <div className="mt-2 mb-1 flex-col ml-5 border border-2 inline-block" >
         <img src="#" alt="product-id#423$" />
         <div>
            <p>product discription</p>
         </div>
         <div>
           <p>*****</p>
         </div>
         <div>
            <h5>price</h5>
         </div>
         <div>
            <p>Free delivery</p>
         </div>
        </div>
        
       </div>
        </>
    );
}

export default  Home;