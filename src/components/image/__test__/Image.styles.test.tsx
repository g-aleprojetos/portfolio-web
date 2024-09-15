import React from 'react';
import {render, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {ImageStyled, Svg, ContainerImage} from '../Image.styles';

describe('Image.styles', () => {
  test('ImageStyled DEVE ser igual ao snapshot', async () => {
    await act(async () => {
      const {container} = render(<ImageStyled />);
      expect(container).toMatchSnapshot();
    });
  });

  test('ImageStyled DEVE ser igual ao snapshot QUANDO a inclinacao 45', async () => {
    await act(async () => {
      const {container} = render(<ImageStyled $inclinacao={45} />);
      expect(container).toMatchSnapshot();
    });
  });

  test('ImageStyled DEVE ser igual ao snapshot QUANDO o cursor for pointer', async () => {
    await act(async () => {
      const {container} = render(<ImageStyled cursor="pointer" />);
      expect(container).toMatchSnapshot();
    });
  });

  test('ImageStyled DEVE ser igual ao snapshot QUANDO o cursor for default', async () => {
    await act(async () => {
      const {container} = render(<ImageStyled cursor="default" />);
      expect(container).toMatchSnapshot();
    });
  });

  test('ImageStyled DEVE ser igual ao snapshot QUANDO o spinner for true e a velocidadeSpinner for 2', async () => {
    await act(async () => {
      const {container} = render(
        <ImageStyled $spinner={true} $velocidadeSpinner={2} />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  test('ContainerImage DEVE ser igual ao snapshot QUANDO largura e altura são fornecidas como strings', async () => {
    await act(async () => {
      const {container} = render(
        <ContainerImage $largura="100px" $altura="100px" />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  test('ContainerImage DEVE ser igual ao snapshot QUANDO apenas largura é fornecida como string', async () => {
    await act(async () => {
      const {container} = render(<ContainerImage $largura="150px" />);
      expect(container).toMatchSnapshot();
    });
  });

  test('ContainerImage DEVE ser igual ao snapshot QUANDO apenas altura é fornecida como string', async () => {
    await act(async () => {
      const {container} = render(<ContainerImage $altura="200px" />);
      expect(container).toMatchSnapshot();
    });
  });

  test('Svg DEVE ser igual ao snapshot', async () => {
    await act(async () => {
      const {container} = render(<Svg src="path/to/your.svg" />);
      expect(container).toMatchSnapshot();
    });
  });

  test('Svg DEVE ser igual ao snapshot QUANDO a inclinacao 45', async () => {
    await act(async () => {
      const {container} = render(
        <Svg src="path/to/your.svg" $inclinacao={45} />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  test('Svg DEVE ser igual ao snapshot QUANDO o cursor for pointer', async () => {
    await act(async () => {
      const {container} = render(
        <Svg src="path/to/your.svg" cursor="pointer" />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  test('Svg DEVE ser igual ao snapshot QUANDO o cursor for default', async () => {
    await act(async () => {
      const {container} = render(
        <Svg src="path/to/your.svg" cursor="default" />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  test('Svg DEVE ser igual ao snapshot QUANDO o spinner for true e a velocidadeSpinner for 2', async () => {
    await act(async () => {
      const {container} = render(
        <Svg src="path/to/your.svg" $spinner={true} $velocidadeSpinner={2} />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  test('Svg DEVE ser igual ao snapshot QUANDO a cor for fornecida', async () => {
    await act(async () => {
      const {container} = render(<Svg src="path/to/your.svg" color="red" />);
      expect(container).toMatchSnapshot();
    });
  });
});
