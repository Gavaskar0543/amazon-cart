import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../Redux/Reducer/apiSlice';

import Styled from 'styled-components';
function Home(){
  
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.api);

console.log(apiData);

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  if (apiData.status === 'loading') {
    return <div>Loading...</div>;
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
      </section>  
       <section id="female-clothing" className='section mb75'>
       <div className="section-heading">
        <span>Girls Clothing</span>
        </div>
       </section>
       <section id='Electronic' className='section mb75'>
       <div className="section-heading">
        <span>Electronics</span>
        </div>
       </section>
       <section id="jewellery" className='section mb75'>
       <div className="section-heading">
        <span>jewellery</span>
        </div>
       </section>
       </MainDiv>
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


 section{
  width:100%;
  height:20vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  flex-wrap:wrap;

 }
 section{
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
`
export default  Home;