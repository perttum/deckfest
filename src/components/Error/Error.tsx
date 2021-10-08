import React from 'react';
import './Error.css';

const Error = ({ falseId }: { falseId: string}) => {
  return(
    <div>
      <p>Deck with ID: {falseId} does not exist!</p>
    </div>
  );
};

export default Error;