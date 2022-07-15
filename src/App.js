import React from 'react';
import Controlled from './ex-0715-3/Controlled';
import MultipleInput from './ex-0715-3/MultipleInput';
import { Container } from 'semantic-ui-react';
import BGwave from './BGwave/BGwave';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <MultipleInput />
      </Container>
      <BGwave />
    </>
  );
}

export default App;
