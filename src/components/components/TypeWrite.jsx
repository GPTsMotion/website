import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const TypeWriter = (
  props
) => {
  return (
    <TypeWriterEffect
      id="hero-title"
      textStyle={{ 
        fontSize: '3em',
        fontWeight: 800,
        color: '#ffffff',
        textAlign: 'left',
        textShadow: '0 0 10px gray',
      }} startDelay={300}
      cursorColor="#ffffff"
      multiText={[
        'Browser Automate Action Hub ',
        'Designed For GPTs',
      ]}
      multiTextDelay={2000}
      multiTextLoop={true}
      typeSpeed={100}
    
      {
        ...props
      }
    />
  );
};

export default TypeWriter;
