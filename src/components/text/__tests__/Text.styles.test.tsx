import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {TextStyled} from '../Text.styles';
import {colors} from 'resources/colors';

describe('Texto.styles', () => {
  test('DEVE ser igual ao snapshot', () => {
    const {container} = render(<TextStyled>Teste</TextStyled>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`DEVE ter a cor igual a "##000000" QUANDO a propriedade cor informada for ${colors.black} `, () => {
    const {container} = render(
      <TextStyled color={colors.black}>Teste</TextStyled>,
    );
    expect(container.firstChild).toHaveStyleRule('color', '#000000');
  });

  test('DEVE ter o tamanho da fonte igual a "14" QUANDO a propriedade tamanho for igual a "14"', () => {
    const {container} = render(<TextStyled $tamanho={14}>Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('font-size', '14px');
  });

  test('DEVE ter a marginTop igual a "10" QUANDO a propriedade marginTop for igual a "10"', () => {
    const {container} = render(<TextStyled $marginTop={10}>Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('margin-top', '10px');
  });

  test('DEVE ter o fontFamily igual a "avertaSemibold" QUANDO a propriedade peso for igual a "bold"', () => {
    const {container} = render(<TextStyled peso="bold">Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule(
      'font-family',
      'AvertaStd-Bold',
    );
  });

  test('DEVE ter o text-transform igual a "uppercase" QUANDO a propriedade toUpper for igual a "true"', () => {
    const {container} = render(<TextStyled $toUpper={true}>Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('text-transform', 'uppercase');
  });

  test('DEVE ter o cursor igual a "pointer" QUANDO a propriedade cursor for igual a "pointer"', () => {
    const {container} = render(<TextStyled cursor="pointer">Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer');
  });

  test('DEVE ter o line-height igual a "20" QUANDO a propriedade for passada no alturaDeLinha', () => {
    const {container} = render(
      <TextStyled $alturaDeLinha={20}>Teste</TextStyled>,
    );
    expect(container.firstChild).toHaveStyleRule('line-height', '20px');
  });
});
