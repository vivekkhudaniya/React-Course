import React from 'react';

const Component2 = () => {
  const Arr1 = [
    { id: 1, text: 'text 1', number: 1 },
    { id: 2, text: 'text 2', number: 2 },
    { id: 3, text: 'text 3', number: 3 },
    { id: 4, text: 'text 4', number: 4 },
    { id: 5, text: 'text 5', number: 5 }
  ];

  return (
    <div>
      {Arr1.map(item => (
        <div key={item.id}>
          <p>Text: {item.text}</p>
          <p>Number: {item.number}</p>
        </div>
      ))}
    </div>
  );
};

export default Component2;
