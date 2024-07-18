import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../Layout.styles';

describe('Layout.styles', () => {
  test('Container DEVE ser igual ao snapshot QUANDO data-backgroundblack for igual a true', () => {
    const {container} = render(<S.Container data-backgroundblack={true} />);
    expect(container).toMatchSnapshot();
  });

  test('Container DEVE ser igual ao snapshot QUANDO data-backgroundblack for igual a false', () => {
    const {container} = render(<S.Container data-backgroundblack={false} />);
    expect(container).toMatchSnapshot();
  });
});
