import React from 'react';
import GreetingContainer from './greetings/greeting_container';

const App = ({ children }) => (
  <div>
    <h1>NetClips</h1>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
