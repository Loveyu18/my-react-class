import React from 'react';
import { Container } from 'semantic-ui-react';
import BGwave from './BGwave/BGwave';
import Navbar from './Navbar/Navbar';
import User from './ex-0718-2/User'

function App() {
  return (
    <>
      <Navbar />
        <User />
      <BGwave />
    </>
  );
}

export default App;
