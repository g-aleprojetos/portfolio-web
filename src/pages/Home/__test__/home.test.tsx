import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Home} from '../home';

describe('Home', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Home />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "Home"`, () => {
      const notFound = component.getByTestId('test-home');
      expect(notFound).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = component.getByTestId('test-image-home');
      expect(imagem).toBeDefined();
    });
  });
});
