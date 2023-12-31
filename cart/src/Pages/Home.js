import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../Redux/Reducer/apiSlice';
import Ad from '../Components/Ad';
import Styled from 'styled-components';
import Loading from '../Components/Loading';
import Products from '../Components/Products'
import Footer from '../Components/Footer';
function Home(){
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.api);

const auth = useSelector((state) => state.auth);
localStorage.setItem('auth',auth);




  let electronics = [];
  let jewelery = [];
  let mens = [];
  let womens = [];
 if(apiData.data !== null){

 
  apiData.data.forEach(element => {
    
    if(element.category === 'electronics'){
      electronics.push(element);
    }
    else if(element.category === 'jewelery'){
      jewelery.push(element);
    }
    else if(element.category === `men's clothing`){
      mens.push(element);
    }
    else{
      womens.push(element);
    }
    
  });
 }

 
  useEffect(() => {
    document.title = 'ChyaMart|Home';
    dispatch(fetchApiData());
  }, [dispatch]);

  if (apiData.status === 'loading') {
  
    return <Loading/>;
  }
  

  if (apiData.status === 'failed') {
    return <div>Error: {apiData.error}</div>;
  }

 
  

   return(
        <>
        <BackGround>
       
        </BackGround>
       
       <MainDiv>
       <section id='mens-clothing' className='section mb75'>
       <div className="section-heading">
        <span>Mens Clothing</span>
        </div>
        <div className='flex flex-wrap justify-around makeGrid  mt-4 mb-4'>
         {mens.map((data) => {
         return <Products item={data}/>
})}
        
        </div>
      </section>  

     

   <Ad/>
      <section id='womens-clothing' className='section mb75'>
       <div className="section-heading">
        <span>Girls Clothing</span>
        </div>
        <div className='flex flex-wrap justify-around makeGrid  mt-4 mb-4'>
         {womens.map((data) => {
         return <Products item={data}/>
})}
        
        </div>
      </section>  
<Ad/>

       <section id='Electronic' className='section mb75'>
       <div className="section-heading">
        <span>Electronics</span>
        </div>
        <div className='flex flex-wrap justify-around makeGrid   mt-4 mb-4'>
         {electronics.map((data) => {
          return <Products item={data}/>}
      )}
      
        </div>
       </section>
<Ad/>
       <section id="jewellery" className='section mb75'>
       <div className="section-heading">
        <span>jewelery</span>
        </div>
        <div className='flex lg:flex-wrap justify-around makeGrid  mt-4 mb-4'>
         {jewelery.map((data) => {
          return <Products item={data}/>
         })}
        
        </div>
       </section>
       </MainDiv>
       <Footer/>
        </>
    );

   };

const BackGround = Styled.div`
width:100%;
height:50vh;
background-image:url('https://aryas.fashion/resource/public/website_files/img/bhty-outwsedy-oi.jpg');
background-repeat:no-repeat;
background-position:center;
background-size:contain;
background-color:#fe862c;
background-attachment:fixed;
overflow:hidden;



`
const MainDiv = Styled.div`
width:100%;



.section{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}

section:nth-child(2n){
  background-color: #9e9b9b29;
}
section:nth-child(2n+1){
  background-color: white;
}
.section-heading{
  width:auto;
  padding:2px 10px 10px;
 
  font-weight:auto;
}

.section-heading span{
  font-size: 40px;
  color:#033b56;
  display: inline-block;
  padding-top:10px;
  margin-right:0.5rem;
  text-transform: uppercase;
}
.mb75{
  margin-bottom:75px;
}

@media screen and (max-width:480px){
  .makeGrid{
    display:flex;
    flex-wrap:wrap;
    gap:69px;
  }
  
}
`
export default  Home;