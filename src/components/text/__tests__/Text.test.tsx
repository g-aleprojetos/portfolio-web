import React from 'react';
import {render} from '@testing-library/react';
import * as S from '../Text';

describe('Texto', () => {
  describe('Renderização', () => {
    test('DEVE renderizar o texto "Texto de teste"', () => {
      const result = render(<S.Text>Texto de teste</S.Text>).getByText(
        'Texto de teste',
      );

      expect(result).toBeDefined();
    });
  });
});
