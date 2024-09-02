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

  test('Item DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Item />);
    expect(container).toMatchSnapshot();
  });

  test('ItemContent DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.ItemContent />);
    expect(container).toMatchSnapshot();
  });

  test('Header DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Header />);
    expect(container).toMatchSnapshot();
  });

  test('Nav DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Nav />);
    expect(container).toMatchSnapshot();
  });

  test('TextoHeader DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.TextoHeader />);
    expect(container).toMatchSnapshot();
  });
});
