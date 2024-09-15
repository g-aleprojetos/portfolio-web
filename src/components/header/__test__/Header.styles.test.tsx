import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {colors} from 'resources/colors';
import {margin} from 'resources/margins';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../Header.styles';

describe('Header.styles', () => {
  test('ContainerLogo DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.ContainerLogo />);
    expect(container).toMatchSnapshot();
  });

  test('HeaderContainer DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.HeaderContainer />);
    expect(container).toMatchSnapshot();
  });

  test('Imagem DEVE aplicar cursor como "default" QUANDO $isActivated for verdadeiro', () => {
    const {container} = render(<S.Imagem src="icon.png" $isActivated={true} />);
    expect(container.firstChild).toHaveStyleRule('cursor', 'default');
  });

  test('Imagem DEVE aplicar cursor como "pointer" QUANDO $isActivated for falso', () => {
    const {container} = render(
      <S.Imagem src="icon.png" $isActivated={false} />,
    );
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer');
  });

  test('Item DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Item />);
    expect(container).toMatchSnapshot();
  });

  test('ItemContent DEVE aplicar a borda preta QUANDO $isActivated e $backgroundblack forem verdadeiros', () => {
    const {container} = render(
      <S.ItemContent $isActivated={true} $backgroundblack={true} />,
    );
    expect(container.firstChild).toHaveStyleRule(
      'border-bottom',
      `${margin.xxxsmall}px solid ${colors.black}`,
    );
  });

  test('ItemContent DEVE aplicar a borda transparente QUANDO $isActivated for falso', () => {
    const {container} = render(<S.ItemContent $isActivated={false} />);
    expect(container.firstChild).toHaveStyleRule(
      'border-bottom',
      `${margin.xxxsmall}px solid transparent`,
    );
  });

  test('Nav DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Nav />);
    expect(container).toMatchSnapshot();
  });

  test('Navegacao DEVE ser igual ao snapshot', () => {
    const {container} = render(
      <MemoryRouter>
        <S.Navegacao to="/" />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('TextoHeader DEVE aplicar a cor preta QUANDO $backgroundblack for verdadeiro', () => {
    const {container} = render(<S.TextoHeader $backgroundblack={true} />);
    expect(container.firstChild).toHaveStyleRule('color', colors.black);
  });

  test('TextoHeader DEVE aplicar a cor de fundo padrão QUANDO $backgroundblack for falso', () => {
    const {container} = render(<S.TextoHeader $backgroundblack={false} />);
    expect(container.firstChild).toHaveStyleRule('color', colors.background01);
  });

  test('TextoHeader DEVE aplicar o cursor como "default" QUANDO $isActivated for verdadeiro', () => {
    const {container} = render(<S.TextoHeader $isActivated={true} />);
    expect(container.firstChild).toHaveStyleRule('cursor', 'default');
  });

  test('TextoHeader DEVE aplicar o cursor como "pointer" QUANDO $isActivated for falso', () => {
    const {container} = render(<S.TextoHeader $isActivated={false} />);
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer');
  });
});
