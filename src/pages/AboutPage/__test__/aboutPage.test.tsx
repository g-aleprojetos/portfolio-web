import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {AboutPage} from '../aboutPage';

describe('AboutPage', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<AboutPage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "AboutPage"`, () => {
      const notFound = component.getByTestId('test-about-page');
      expect(notFound).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = component.getByTestId('test-image-about-page');
      expect(imagem).toBeDefined();
    });
  });
});
