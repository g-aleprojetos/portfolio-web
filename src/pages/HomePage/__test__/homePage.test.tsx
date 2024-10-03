import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {HomePage} from '../homePage';

describe('HomePage', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<HomePage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "HomePage"`, () => {
      const tree = component.getByTestId('test-home-page');
      expect(tree).toBeDefined();
    });
    test('Deve renderizar o texto "HomePage".', () => {
      const linkElement = component.getByText(/HomePage/i);
      expect(linkElement).toBeInTheDocument();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = component.getByTestId('test-image-home-page');
      expect(imagem).toBeDefined();
    });
  });
});
