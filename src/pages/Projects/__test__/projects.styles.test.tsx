import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import manutencao from 'assets/image/manutencao.svg';
import * as S from '../projects.styles';

describe('Projects.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Container />);
    expect(container).toMatchSnapshot();
  });
  test('Image DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Imagem src={manutencao} />);
    expect(container).toMatchSnapshot();
  });
});
