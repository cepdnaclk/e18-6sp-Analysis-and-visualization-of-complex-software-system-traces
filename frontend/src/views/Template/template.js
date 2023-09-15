// Template.js

import React from 'react';
import image from './image.png'; // Replace with the actual path to your image

const Template = () => {
  return (
    <div>
      <h1>Template Used for the model</h1>
      <img src={image} alt="Description of the image" style={{ maxWidth: '900px', height: 'auto' }} />
    </div>
  );
};

export default Template;
