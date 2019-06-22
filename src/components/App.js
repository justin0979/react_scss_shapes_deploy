import React from 'react';

import Top from './Top';
import Center from './Center';
import '../sass/main.scss';

const App = () => {
  return (
    <div className="container">
      <div className="triangle">
        <Top />
        <Center />
      </div>
    </div>
  );
};

export default App;
