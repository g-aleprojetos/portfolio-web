import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {ConfigurationPage} from '../configurationPage';

describe('ConfigurationPage', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<ConfigurationPage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "ConfigurationPage"`, () => {
      const notFound = component.getByTestId('test-configuration-page');
      expect(notFound).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = component.getByTestId('test-image-configuration-page');
      expect(imagem).toBeDefined();
    });
  });
});
