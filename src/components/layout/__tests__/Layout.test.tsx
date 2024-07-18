import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Layout} from '../Layout';
import {useBackgroundContext} from 'context/background';

jest.mock('context/background', () => ({
  useBackgroundContext: jest.fn(),
}));

const useBackgroundContextMock = useBackgroundContext as jest.Mock;

describe('Layout', () => {
  const setup = (themeDark = false) => {
    useBackgroundContextMock.mockReturnValue({
      handleToggle: jest.fn(),
      themeDark,
    });

    return render(
      <Layout>
        <div>Teste</div>
      </Layout>,
    );
  };

  describe('Renderização', () => {
    test('Deve renderizar o Layout', () => {
      setup();
      const element = screen.getByTestId('layout-page');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Comportamento', () => {
    test('Deve ter data-backgroundblack como false quando themeDark é false', () => {
      setup(false);
      const element = screen.getByTestId('layout-page');
      expect(element).toHaveAttribute('data-backgroundblack', 'false');
    });

    test('Deve ter data-backgroundblack como true quando themeDark é true', () => {
      setup(true);
      const element = screen.getByTestId('layout-page');
      expect(element).toHaveAttribute('data-backgroundblack', 'true');
    });
  });

  describe('Conteúdo dos filhos', () => {
    test('Deve renderizar os filhos dentro do Layout', () => {
      setup();
      const childElement = screen.getByText('Teste');
      expect(childElement).toBeInTheDocument();
    });
  });
});
