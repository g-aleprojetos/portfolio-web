import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {ImageStyled, Svg} from '../Image.styles';

describe('Image.styles', () => {
  test('ImageStyled DEVE ser igual ao snapshot', () => {
    const {container} = render(<ImageStyled />);
    expect(container).toMatchSnapshot();
  });

  test('ImageStyled DEVE ser igual ao snapshot QUANDO a inclinacao 45', () => {
    const {container} = render(<ImageStyled $inclinacao={45} />);
    expect(container).toMatchSnapshot();
  });

  test('ImageStyled DEVE ser igual ao snapshot QUANDO o cursor for pointer', () => {
    const {container} = render(<ImageStyled cursor="pointer" />);
    expect(container).toMatchSnapshot();
  });

  test('ImageStyled DEVE ser igual ao snapshot QUANDO o cursor for default', () => {
    const {container} = render(<ImageStyled cursor="default" />);
    expect(container).toMatchSnapshot();
  });

  test('ImageStyled DEVE ser igual ao snapshot QUANDO o spinner for true e a velocidadeSpinner for 2', () => {
    const {container} = render(
      <ImageStyled $spinner={true} $velocidadeSpinner={2} />,
    );
    expect(container).toMatchSnapshot();
  });

  test('Svg DEVE ser igual ao snapshot', () => {
    const {container} = render(<Svg src="path/to/your.svg" />);
    expect(container).toMatchSnapshot();
  });

  test('Svg DEVE ser igual ao snapshot QUANDO a inclinacao 45', () => {
    const {container} = render(<Svg src="path/to/your.svg" $inclinacao={45} />);
    expect(container).toMatchSnapshot();
  });

  test('Svg DEVE ser igual ao snapshot QUANDO o cursor for pointer', () => {
    const {container} = render(<Svg src="path/to/your.svg" cursor="pointer" />);
    expect(container).toMatchSnapshot();
  });

  test('Svg DEVE ser igual ao snapshot QUANDO o cursor for default', () => {
    const {container} = render(<Svg src="path/to/your.svg" cursor="default" />);
    expect(container).toMatchSnapshot();
  });

  test('Svg DEVE ser igual ao snapshot QUANDO o spinner for true e a velocidadeSpinner for 2', () => {
    const {container} = render(
      <Svg src="path/to/your.svg" $spinner={true} $velocidadeSpinner={2} />,
    );
    expect(container).toMatchSnapshot();
  });
});
