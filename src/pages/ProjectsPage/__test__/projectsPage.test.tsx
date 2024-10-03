import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {ProjectsPage} from '../projectsPage';

describe('ProjectsPage', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<ProjectsPage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "ProjectsPage"`, () => {
      const tree = component.getByTestId('test-projects-page');
      expect(tree).toBeDefined();
    });
    test('Deve renderizar o texto "ProjectsPage".', () => {
      const linkElement = component.getByText(/ProjectsPage/i);
      expect(linkElement).toBeInTheDocument();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = component.getByTestId('test-image-projects-page');
      expect(imagem).toBeDefined();
    });
  });
});
