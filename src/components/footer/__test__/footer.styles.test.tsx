import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../footer.styles';

describe('Footer.styles', () => {
  test('Container DEVE ser igual ao snapshot QUANDO $backgroundblack for igual a true', () => {
    const {container} = render(<S.Container $backgroundblack={true} />);
    expect(container).toMatchSnapshot();
  });

  test('Container DEVE ser igual ao snapshot QUANDO $backgroundblack for igual a false', () => {
    const {container} = render(<S.Container $backgroundblack={false} />);
    expect(container).toMatchSnapshot();
  });

  test('ContainerItem DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.ContainerItem />);
    expect(container).toMatchSnapshot();
  });

  test('Imagem DEVE ser igual ao snapshot com $isActivated true', () => {
    const {container} = render(<S.Imagem src="icon.svg" $isActivated={true} />);
    expect(container).toMatchSnapshot();
  });

  test('Imagem DEVE ser igual ao snapshot com $backgroundblack true', () => {
    const {container} = render(
      <S.Imagem src="icon.svg" $backgroundblack={true} />,
    );
    expect(container).toMatchSnapshot();
  });

  test('Item DEVE ser igual ao snapshot com $isActivated true', () => {
    const {container} = render(<S.Item $isActivated={true} />);
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

  test('TextNavegation DEVE ser igual ao snapshot com $isActivated true', () => {
    const {container} = render(<S.TextNavegation $isActivated={true} />);
    expect(container).toMatchSnapshot();
  });

  test('TextNavegation DEVE ser igual ao snapshot QUANDO $backgroundblack for igual a true', () => {
    const {container} = render(<S.TextNavegation $backgroundblack={true} />);
    expect(container).toMatchSnapshot();
  });

  test('TextNavegation DEVE ser igual ao snapshot QUANDO $backgroundblack for igual a false', () => {
    const {container} = render(<S.TextNavegation $backgroundblack={false} />);
    expect(container).toMatchSnapshot();
  });

  test('Indicator DEVE ser igual ao snapshot com $position 0', () => {
    const {container} = render(<S.Indicator $position={0} />);
    expect(container).toMatchSnapshot();
  });

  test('Indicator DEVE ser igual ao snapshot com $position 1', () => {
    const {container} = render(<S.Indicator $position={1} />);
    expect(container).toMatchSnapshot();
  });

  test('Indicator DEVE ser igual ao snapshot com $position 2', () => {
    const {container} = render(<S.Indicator $position={2} />);
    expect(container).toMatchSnapshot();
  });

  test('Indicator DEVE ser igual ao snapshot com $position 3', () => {
    const {container} = render(<S.Indicator $position={3} />);
    expect(container).toMatchSnapshot();
  });

  test('Indicator DEVE ser igual ao snapshot com $position -1', () => {
    const {container} = render(<S.Indicator $position={-1} />);
    expect(container).toMatchSnapshot();
  });
});
