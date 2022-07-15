import React from 'react';
import HTML5Form from './ex-0715-4/HTML5Form';
import { Container } from 'semantic-ui-react';
import BGwave from './BGwave/BGwave';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <HTML5Form />
      </Container>
      <BGwave />
    </>
  );
}

export default App;
