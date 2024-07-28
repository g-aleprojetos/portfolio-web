import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Image} from '../Image';
import 'jest-styled-components';

interface InlineSVGProps {
  [key: string]: unknown;
}

jest.mock('react-inlinesvg', () => {
  const MockInlineSVG = (props: InlineSVGProps) => <svg {...props} />;
  MockInlineSVG.displayName = 'MockInlineSVG';
  return MockInlineSVG;
});

describe('Image', () => {
  describe('SVG', () => {
    test('deve renderizar um SVG corretamente', () => {
      render(<Image src="icon.svg" alt="icone" />);
      const svgElement = screen.getByTestId('svg');
      expect(svgElement).toBeInTheDocument();
    });

    test('deve renderizar um SVG corretamente com o testid passado', () => {
      render(<Image src="icon.svg" alt="icone" testId="imagem" />);
      const svgElement = screen.getByTestId('imagem-svg');
      expect(svgElement).toBeInTheDocument();
    });

    test('deve aplicar cor corretamente no SVG', () => {
      render(<Image src="icon.svg" cor="red" />);
      const svgElement = screen.getByTestId('svg');
      expect(svgElement).toHaveStyle('fill: red');
    });

    test('deve aplicar spinner corretamente no SVG', () => {
      render(<Image src="icon.svg" spinner={true} velocidadeSpinner={2} />);
      const svgElement = screen.getByTestId('svg');
      const styles = window.getComputedStyle(svgElement);
      expect(styles.animation).toContain('infinite 2s linear');
    });

    test('deve aplicar inclinação corretamente no SVG', () => {
      render(<Image src="icon.svg" inclinacao={45} />);
      const svgElement = screen.getByTestId('svg');
      expect(svgElement).toHaveStyle('transform: rotate(45deg)');
    });

    test('deve aplicar cursor correto no SVG', () => {
      render(<Image src="icon.svg" cursor="pointer" />);
      const svgElement = screen.getByTestId('svg');
      expect(svgElement).toHaveStyle('cursor: pointer');
    });

    test('não deve aplicar animação quando spinner é falso no SVG', () => {
      render(<Image src="icon.svg" spinner={false} />);
      const svgElement = screen.getByTestId('svg');
      const styles = window.getComputedStyle(svgElement);
      expect(styles.animation).toBe('');
    });
  });

  describe('Image', () => {
    test('deve renderizar uma imagem corretamente', () => {
      render(<Image src="icon.png" alt="icone" />);
      const imgElement = screen.getByTestId('img');
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', 'icon.png');
      expect(imgElement).toHaveAttribute('alt', 'icone');
    });

    test('deve renderizar um imagem corretamente com o testid passado', () => {
      render(<Image src="icon.png" alt="icone" testId="imagem" />);
      const imgElement = screen.getByTestId('imagem-img');
      expect(imgElement).toBeInTheDocument();
    });

    test('deve aplicar largura e altura corretamente na imagem', () => {
      render(<Image src="icon.png" largura={64} altura={64} />);
      const imgElement = screen.getByTestId('img');
      expect(imgElement).toHaveAttribute('width', '64');
      expect(imgElement).toHaveAttribute('height', '64');
    });

    test('deve aplicar spinner corretamente na imagem', () => {
      render(<Image src="icon.png" spinner={true} velocidadeSpinner={2} />);
      const imgElement = screen.getByTestId('img');
      const styles = window.getComputedStyle(imgElement);
      expect(styles.animation).toContain('infinite 2s linear');
    });

    test('deve aplicar inclinação corretamente na imagem', () => {
      render(<Image src="icon.png" inclinacao={45} />);
      const imgElement = screen.getByTestId('img');
      expect(imgElement).toHaveStyle('transform: rotate(45deg)');
    });

    test('deve aplicar cursor correto na imagem', () => {
      render(<Image src="icon.png" cursor="pointer" />);
      const imgElement = screen.getByTestId('img');
      expect(imgElement).toHaveStyle('cursor: pointer');
    });

    test('não deve aplicar animação quando spinner é falso na imagem', () => {
      render(<Image src="icon.png" spinner={false} />);
      const imgElement = screen.getByTestId('img');
      const styles = window.getComputedStyle(imgElement);
      expect(styles.animation).toBe('');
    });
  });
});
