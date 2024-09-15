import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {TextStyled} from '../Text.styles';
import {colors} from 'resources/colors';
import fonts from 'resources/fonts';
import texts from 'resources/texts';

describe('TextStyled Component', () => {
  test('DEVE ser igual ao snapshot', () => {
    const {container} = render(<TextStyled>Teste</TextStyled>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`DEVE ter a cor igual a "${colors.black}" QUANDO a propriedade color for igual a "${colors.black}"`, () => {
    const {container} = render(
      <TextStyled color={colors.black}>Teste</TextStyled>,
    );
    expect(container.firstChild).toHaveStyleRule('color', colors.black);
  });

  test('DEVE ter a cor padrão igual a "colors.background01" QUANDO a propriedade color não for informada', () => {
    const {container} = render(<TextStyled>Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('color', colors.background01);
  });

  test('DEVE ter o tamanho da fonte igual a "14px" QUANDO a propriedade $tamanho for igual a "14"', () => {
    const {container} = render(<TextStyled $tamanho={14}>Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('font-size', '14px');
  });

  test('DEVE ter o tamanho da fonte padrão igual a texts.tamanho.xxsmall QUANDO a propriedade $tamanho não for informada', () => {
    const {container} = render(<TextStyled>Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule(
      'font-size',
      `${texts.tamanho.xxsmall}px`,
    );
  });

  test('DEVE ter a margin-top igual a "10px" QUANDO a propriedade $marginTop for igual a "10"', () => {
    const {container} = render(<TextStyled $marginTop={10}>Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('margin-top', '10px');
  });

  test('DEVE ter a margin-top padrão igual a "0px" QUANDO a propriedade $marginTop não for informada', () => {
    const {container} = render(<TextStyled>Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('margin-top', '0px');
  });

  test('DEVE ter o font-family igual a "AvertaStd-Bold" QUANDO a propriedade peso for igual a "bold"', () => {
    const {container} = render(<TextStyled peso="bold">Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule(
      'font-family',
      fonts.avertaBold,
    );
  });

  test('DEVE ter o font-family igual a "AvertaStd-Regular" QUANDO a propriedade peso não for informada', () => {
    const {container} = render(<TextStyled>Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule(
      'font-family',
      fonts.avertaRegular,
    );
  });

  test('DEVE ter o text-transform igual a "uppercase" QUANDO a propriedade $toUpper for igual a true', () => {
    const {container} = render(<TextStyled $toUpper={true}>Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('text-transform', 'uppercase');
  });

  test('DEVE ter o text-transform igual a "none" QUANDO a propriedade $toUpper não for informada', () => {
    const {container} = render(<TextStyled>Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('text-transform', 'none');
  });

  test('DEVE ter o cursor igual a "pointer" QUANDO a propriedade cursor for igual a "pointer"', () => {
    const {container} = render(<TextStyled cursor="pointer">Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer');
  });

  test('DEVE ter o cursor padrão igual a "text" QUANDO a propriedade cursor não for informada', () => {
    const {container} = render(<TextStyled>Teste</TextStyled>);
    expect(container.firstChild).toHaveStyleRule('cursor', 'text');
  });

  test('DEVE ter o line-height igual a "20px" QUANDO a propriedade $alturaDeLinha for igual a "20"', () => {
    const {container} = render(
      <TextStyled $alturaDeLinha={20}>Teste</TextStyled>,
    );
    expect(container.firstChild).toHaveStyleRule('line-height', '20px');
  });

  test('NÃO DEVE ter o line-height QUANDO a propriedade $alturaDeLinha não for informada', () => {
    const {container} = render(<TextStyled>Teste</TextStyled>);
    expect(container.firstChild).not.toHaveStyleRule('line-height');
  });
});
