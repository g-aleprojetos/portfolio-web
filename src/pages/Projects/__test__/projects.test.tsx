import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Projects} from '../projects';

describe('Projects', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Projects />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "Projects"`, () => {
      const notFound = component.getByTestId('test-projects');
      expect(notFound).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = component.getByTestId('test-image-projects');
      expect(imagem).toBeDefined();
    });
  });
});
