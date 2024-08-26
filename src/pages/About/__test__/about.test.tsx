import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {About} from '../about';

describe('About', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<About />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "About"`, () => {
      const notFound = component.getByTestId('test-about');
      expect(notFound).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = component.getByTestId('test-image-about');
      expect(imagem).toBeDefined();
    });
  });
});
