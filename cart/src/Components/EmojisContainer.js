import React from 'react';

const EmojisContainer = () => {
  const emojis = ["🥼", "👕", "👗", "🧦🧦", "👖👖"];

  const getRandomOffset = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div style={{ position: 'relative', width: '300px', height: '200px',margin:'auto' }}>
      {emojis.map((emoji, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${getRandomOffset(0, 270)}px`, // Adjust offsets as needed
            top: `${getRandomOffset(0, 170)}px`, // Adjust offsets as needed
            fontSize: '24px', // Adjust font size as needed
          }}
        >
          {emoji}
        </div>
      ))}
    </div>)
        }
  
export default EmojisContainer;
