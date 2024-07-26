import React from 'react';
import {render} from '@testing-library/react';
import * as S from '../Text';

describe('Texto', () => {
  describe('Renderização', () => {
    test('DEVE renderizar o texto "Texto de teste"', () => {
      const result = render(<S.Texto>Texto de teste</S.Texto>).getByText(
        'Texto de teste',
      );

      expect(result).toBeDefined();
    });
  });
});
