import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../sidebar.styles';

describe('Header.styles', () => {
  test('BotaoMenu DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.BotaoMenu />);
    expect(container).toMatchSnapshot();
  });

  test('BotaoMenu DEVE ser igual ao snapshot QUANDO o $isActivated fo true', () => {
    const {container} = render(<S.BotaoMenu $isActivated={true} />);
    expect(container).toMatchSnapshot();
  });

  test('Container DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Container />);
    expect(container).toMatchSnapshot();
  });

  test('Container DEVE ser igual ao snapshot QUANDO $openMenu for true', () => {
    const {container} = render(<S.Container $openMenu={true} />);
    expect(container).toMatchSnapshot();
  });

  test('HeaderSidebar DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.HeaderSidebar />);
    expect(container).toMatchSnapshot();
  });

  test('IconeHanburger DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.IconeHanburger mudarEstado={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });

  test('Imagem DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Imagem src="path/to/your.svg" />);
    expect(container).toMatchSnapshot();
  });

  test('Inner DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Inner />);
    expect(container).toMatchSnapshot();
  });

  test('MenuSidebar DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.MenuSidebar />);
    expect(container).toMatchSnapshot();
  });

  test('TextoBotao DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.TextoBotao />);
    expect(container).toMatchSnapshot();
  });

  test('TextoHeaderSidebar DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.TextoHeaderSidebar />);
    expect(container).toMatchSnapshot();
  });
});
