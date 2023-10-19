import { useEffect,useState } from "react";
import styled from "styled-components"

export default function Topnav(){
    const [color,setColor] = useState('orangered');
     let arr = ['yellow','orangered','greenyellow','blue'];
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
        <div style={{widht:"100vw",background:`${color}`,transition:"background 2s ease-in-out",backgroundAttachment:"fixed"}}>

            <marquee direction="right"
             behavior="alternate" className=" text-sm text-green-900">Every order get 25% offer</marquee>

        </div>
        </>
    )
}