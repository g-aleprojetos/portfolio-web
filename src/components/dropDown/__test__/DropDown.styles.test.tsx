import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {colors} from 'resources/colors';
import * as S from '../DropDown.styles';

describe('Image.styles', () => {
  test('Caret DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Caret />);
    expect(container).toMatchSnapshot();
  });

  test('Caret DEVE girar ao receber a propriedade $rotate', () => {
    const {container} = render(<S.Caret $rotate={true} />);
    expect(container.firstChild).toHaveStyleRule('transform', 'rotate(180deg)');
  });

  test('Caret DEVE mudar a cor da borda superior ao receber a propriedade $themeDark', () => {
    const {container} = render(<S.Caret $themeDark={true} />);
    expect(container.firstChild).toHaveStyleRule(
      'border-top',
      `8px solid ${colors.black}`,
    );
  });

  test('ContainerOption DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.ContainerOption />);
    expect(container).toMatchSnapshot();
  });

  test('DropdownContainer DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.DropdownContainer />);
    expect(container).toMatchSnapshot();
  });

  test('Flag DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Flag src="icon.svg" />);
    expect(container).toMatchSnapshot();
  });

  test('Menu DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Menu $open={true} />);
    expect(container).toMatchSnapshot();
  });

  test('Menu DEVE ser visível ao receber a propriedade $open', () => {
    const {container} = render(<S.Menu $open={true} />);
    expect(container.firstChild).toHaveStyleRule('opacity', '1');
    expect(container.firstChild).toHaveStyleRule('display', 'block');
  });

  test('Menu DEVE ter o background correto ao receber a propriedade $themeDark como true', () => {
    const {container} = render(<S.Menu $themeDark={true} />);
    expect(container.firstChild).toHaveStyleRule(
      'background',
      colors.background04,
    );
  });

  test('Menu DEVE ter o background correto ao receber a propriedade $themeDark como false', () => {
    const {container} = render(<S.Menu $themeDark={false} />);
    expect(container.firstChild).toHaveStyleRule('background', colors.gunmetal);
  });

  test('Menu DEVE ter a borda correta ao receber a propriedade $themeDark como true', () => {
    const {container} = render(<S.Menu $themeDark={true} />);
    expect(container.firstChild).toHaveStyleRule(
      'border',
      `1px solid ${colors.cadetGrey}`,
    );
  });

  test('Menu DEVE ter a borda correta ao receber a propriedade $themeDark como false', () => {
    const {container} = render(<S.Menu $themeDark={false} />);
    expect(container.firstChild).toHaveStyleRule(
      'border',
      `1px solid ${colors.charcoal}`,
    );
  });

  test('MenuItem DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.MenuItem />);
    expect(container).toMatchSnapshot();
  });

  test('MenuItem DEVE ter background específico ao receber as propriedades $active e $themeDark', () => {
    const {container} = render(<S.MenuItem $active={true} $themeDark={true} />);
    expect(container.firstChild).toHaveStyleRule(
      'background',
      `${colors.midGray}`,
    );
  });

  test('Select DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Select />);
    expect(container).toMatchSnapshot();
  });

  test('Select DEVE ter sombra específica ao receber a propriedade $clicked', () => {
    const {container} = render(<S.Select $clicked={true} />);
    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      `0 0 12px ${colors.lividIndigo}`,
    );
  });

  test('Select DEVE ter o background e borda corretos ao receber a propriedade $themeDark', () => {
    const {container} = render(<S.Select $themeDark={true} $clicked={true} />);
    expect(container.firstChild).toHaveStyleRule(
      'background',
      `${colors.background02}`,
    );
    expect(container.firstChild).toHaveStyleRule(
      'border',
      `2px solid ${colors.background02}`,
    );
  });

  test('Select DEVE ter a borda correta ao receber as propriedades $themeDark como true e $clicked como true', () => {
    const {container} = render(<S.Select $themeDark={true} $clicked={true} />);
    expect(container.firstChild).toHaveStyleRule(
      'border',
      `2px solid ${colors.background02}`,
    );
  });

  test('Select DEVE ter a borda correta ao receber as propriedades $themeDark como true e $clicked como false', () => {
    const {container} = render(<S.Select $themeDark={true} $clicked={false} />);
    expect(container.firstChild).toHaveStyleRule(
      'border',
      `2px solid ${colors.cadetGrey}`,
    );
  });

  test('Select DEVE ter a borda correta ao receber as propriedades $themeDark como false e $clicked como true', () => {
    const {container} = render(<S.Select $themeDark={false} $clicked={true} />);
    expect(container.firstChild).toHaveStyleRule(
      'border',
      `2px solid ${colors.lividIndigo}`,
    );
  });

  test('Select DEVE ter a borda correta ao receber as propriedades $themeDark como false e $clicked como false', () => {
    const {container} = render(
      <S.Select $themeDark={false} $clicked={false} />,
    );
    expect(container.firstChild).toHaveStyleRule(
      'border',
      `2px solid ${colors.charcoalBlue}`,
    );
  });

  test('Selected DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Selected />);
    expect(container).toMatchSnapshot();
  });

  test('Texto DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Texto />);
    expect(container).toMatchSnapshot();
  });

  test('Texto DEVE ter a cor correta ao receber a propriedade $themeDark', () => {
    const {container} = render(<S.Texto $themeDark={true} />);
    expect(container.firstChild).toHaveStyleRule(
      'color',
      `${colors.background01}`,
    );
  });

  test('MenuItem DEVE mudar a cor ao receber hover e a propriedade $themeDark', () => {
    const {container} = render(<S.MenuItem $themeDark={true} />);
    expect(container.firstChild).toHaveStyleRule(
      'background',
      `${colors.darkerCadetGrey}`,
      {
        modifier: ':hover',
      },
    );
  });
});
