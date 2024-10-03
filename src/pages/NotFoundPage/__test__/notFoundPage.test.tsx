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
    test('Deve renderizar o texto "NotFoundPage".', () => {
      const linkElement = component.getByText(/NotFoundPage/i);
      expect(linkElement).toBeInTheDocument();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = component.getByTestId('test-image-notFound-page');
      expect(imagem).toBeDefined();
    });
  });
});
