import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../ToggleSwitch.styles';

describe('ToggleSwitch.styles', () => {
  test('Input DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Input />);
    expect(container).toMatchSnapshot();
  });

  test('Span DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Span />);
    expect(container).toMatchSnapshot();
  });

  test('Switch DEVE ser igual ao snapshot ', () => {
    const {container} = render(<S.Switch />);
    expect(container).toMatchSnapshot();
  });
});
