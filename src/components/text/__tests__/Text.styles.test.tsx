import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {TextoStyled} from '../Text.styles';
import {colors} from 'resources/colors';

describe('Texto.styles', () => {
  test('DEVE ser igual ao snapshot', () => {
    const {container} = render(<TextoStyled>Teste</TextoStyled>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`DEVE ter a cor igual a "##000000" QUANDO a propriedade cor informada for ${colors.black} `, () => {
    const {container} = render(
      <TextoStyled cor={colors.black}>Teste</TextoStyled>,
    );
    expect(container.firstChild).toHaveStyleRule('color', '#000000');
  });

  test('DEVE ter o tamanho da fonte igual a "14" QUANDO a propriedade tamanho for igual a "14"', () => {
    const {container} = render(<TextoStyled $tamanho={14}>Teste</TextoStyled>);
    expect(container.firstChild).toHaveStyleRule('font-size', '14px');
  });

  test('DEVE ter a marginTop igual a "10" QUANDO a propriedade marginTop for igual a "10"', () => {
    const {container} = render(
      <TextoStyled $marginTop={10}>Teste</TextoStyled>,
    );
    expect(container.firstChild).toHaveStyleRule('margin-top', '10px');
  });

  test('DEVE ter o fontFamily igual a "avertaSemibold" QUANDO a propriedade peso for igual a "bold"', () => {
    const {container} = render(<TextoStyled peso="bold">Teste</TextoStyled>);
    expect(container.firstChild).toHaveStyleRule(
      'font-family',
      'AvertaStd-Bold',
    );
  });

  test('DEVE ter o text-transform igual a "uppercase" QUANDO a propriedade toUpper for igual a "true"', () => {
    const {container} = render(
      <TextoStyled $toUpper={true}>Teste</TextoStyled>,
    );
    expect(container.firstChild).toHaveStyleRule('text-transform', 'uppercase');
  });

  test('DEVE ter o cursor igual a "pointer" QUANDO a propriedade cursor for igual a "pointer"', () => {
    const {container} = render(
      <TextoStyled cursor="pointer">Teste</TextoStyled>,
    );
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer');
  });

  test('DEVE ter o line-height igual a "20" QUANDO a propriedade for passada no alturaDeLinha', () => {
    const {container} = render(
      <TextoStyled $alturaDeLinha={20}>Teste</TextoStyled>,
    );
    expect(container.firstChild).toHaveStyleRule('line-height', '20px');
  });
});
