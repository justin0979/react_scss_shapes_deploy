import React from 'react';

import Top from './Top';
import Center from './Center';
import Bottom from './Bottom';
import '../sass/main.scss';

const App = () => {
  return (
    <div className="container">
      <div className="triangle">
        <Top />
        <Center />
        <Bottom />
      </div>
    </div>
  );
};

export default App;
