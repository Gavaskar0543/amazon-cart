import { useEffect,useState } from "react";
import styled from "styled-components"

export default function Topnav(){
    const [color,setColor] = useState('orangered');
     let arr = ['black','orangered','greenyellow','blue'];
    useEffect(()=>{
        let index = 0;
     setInterval(() => {
        if(index < 4){
            setColor(arr[index]);
            index++;
        }
       
     },3000)
     },[color])
    return(
        <>
        <div style={{widht:"100vw",background:`${color}`,transition:"background 2s ease-in-out",fontWeight:"700",color:"wheat"}}>

            <marquee direction="right"
             behavior="alternate" className=" text-xl text-black-700">Every order gets 25% discount &#127881;</marquee>

        </div>
        </>
    )
}