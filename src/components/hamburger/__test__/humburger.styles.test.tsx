import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../hamburger.styles';

describe('hamburger.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const {container} = render(<S.Container />);
    expect(container).toMatchSnapshot();
  });

  test('Container DEVE ser igual ao snapshot QUANDO $tamanho for passado pela props', () => {
    const {container} = render(<S.Container $tamanho={32} />);
    expect(container).toMatchSnapshot();
  });

  test('Span DEVE ser igual ao snapshot com $open false', () => {
    const {container} = render(<S.SpanSuperior $open={false} />);
    expect(container).toMatchSnapshot();
  });

  test('Span DEVE ser igual ao snapshot com $open true', () => {
    const {container} = render(<S.SpanSuperior $open={true} />);
    expect(container).toMatchSnapshot();
  });

  test('SpanSuperior DEVE ser igual ao snapshot com $open false', () => {
    const {container} = render(<S.SpanSuperior $open={false} />);
    expect(container).toMatchSnapshot();
  });

  test('SpanSuperior DEVE ser igual ao snapshot com $open true', () => {
    const {container} = render(<S.SpanSuperior $open={true} />);
    expect(container).toMatchSnapshot();
  });

  test('SpanMeio DEVE ser igual ao snapshot com $open false', () => {
    const {container} = render(<S.SpanMeio $open={false} />);
    expect(container).toMatchSnapshot();
  });

  test('SpanMeio DEVE ser igual ao snapshot com $open true', () => {
    const {container} = render(<S.SpanMeio $open={true} />);
    expect(container).toMatchSnapshot();
  });

  test('SpanInferior DEVE ser igual ao snapshot com open false', () => {
    const {container} = render(<S.SpanInferior $open={false} />);
    expect(container).toMatchSnapshot();
  });

  test('SpanInferior DEVE ser igual ao snapshot com $open true', () => {
    const {container} = render(<S.SpanInferior $open={true} />);
    expect(container).toMatchSnapshot();
  });
});
