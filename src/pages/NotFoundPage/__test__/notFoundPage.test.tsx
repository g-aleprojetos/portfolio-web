import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {NotFoundPage} from '../notFoundPage';

describe('NotFoundPage', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<NotFoundPage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "NotFoundPage"`, () => {
      const tree = component.getByTestId('test-notFound-page');
      expect(tree).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = component.getByTestId('test-image-notFound-page');
      expect(imagem).toBeDefined();
    });
  });
});
