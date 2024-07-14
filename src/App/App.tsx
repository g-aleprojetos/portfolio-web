import React from 'react';
import logo from '../assets/images/logo.svg';
import * as S from './App.styles';

export const App = () => {
  return (
    <S.App>
      <S.Header>
        <S.Logo src={logo} alt="logo" />
        <S.Texto>
          Edit <code>src/App.tsx</code> and save to reload.
        </S.Texto>
        <S.Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </S.Link>
      </S.Header>
    </S.App>
  );
};
