import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
function Ad() {
  const [isAnimating, setAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust this value to determine the scroll position at which the animation triggers
      if (scrollPosition <200) {
        setAnimating(true);
      } else {
        setAnimating(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AddDivContainer >
     
      <video autoPlay muted controls={false} loop playsInline className={`animated-element ${isAnimating ? 'animate' : ''}`}>
    <source src="../Assets/fasShow.mp4" type="video/mp4"/>
  </video>

    </AddDivContainer>
  );
}

const AddDivContainer = styled.div`

.animated-element {
   
    transform: translateX(-10%);
    transition: transform 3s ease-in-out;
  }
  
  .animated-element.animate {
    transform: translateX(-100%);
   
  }
  video {
    position:sticky;
    z-index:-1000;
    width: 50%;
    height: auto; 
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    box-shadow:  5px 5px 10px 0 rgba(0, 0, 0, 0.5);

  }
  
`

export default Ad;

