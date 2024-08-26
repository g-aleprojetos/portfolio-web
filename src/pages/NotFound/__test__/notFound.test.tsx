import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {NotFound} from '../notFound';

describe('NotFound', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<NotFound />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "NotFound"`, () => {
      const notFound = component.getByTestId('test-notFound');
      expect(notFound).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = component.getByTestId('test-image-notFound');
      expect(imagem).toBeDefined();
    });
  });
});
