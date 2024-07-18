import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../App.styles';

describe('App.styles', () => {
  test('App DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.App />);
    expect(container).toMatchSnapshot();
  });

  test('Botao DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Botao data-escolhido={true} />);
    expect(container).toMatchSnapshot();
  });

  test('ContainerBotoes DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.ContainerBotoes />);
    expect(container).toMatchSnapshot();
  });

  test('Header DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Header />);
    expect(container).toMatchSnapshot();
  });

  test('Item DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Item />);
    expect(container).toMatchSnapshot();
  });

  test('Link DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Link />);
    expect(container).toMatchSnapshot();
  });

  test('Logo DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Logo />);
    expect(container).toMatchSnapshot();
  });

  test('Main DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Main />);
    expect(container).toMatchSnapshot();
  });

  test('Nav DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Nav />);
    expect(container).toMatchSnapshot();
  });

  test('Texto DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Texto />);
    expect(container).toMatchSnapshot();
  });

  test('TextoHeader DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.TextoHeader />);
    expect(container).toMatchSnapshot();
  });
});
