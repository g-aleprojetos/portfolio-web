import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Image} from '../Image';
import 'jest-styled-components';
import sizes from 'resources/sizes';

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
    test('DEVE renderizar um SVG corretamente', () => {
      render(<Image src="icon.svg" alt="icone" />);
      const svgElement = screen.getByTestId('svg');
      expect(svgElement).toBeInTheDocument();
    });

    test('DEVE renderizar um SVG corretamente com o testid passado', () => {
      render(<Image src="icon.svg" alt="icone" testId="imagem" />);
      const svgElement = screen.getByTestId('imagem-svg');
      expect(svgElement).toBeInTheDocument();
    });

    test('DEVE aplicar cor corretamente no SVG', () => {
      render(<Image src="icon.svg" color="red" />);
      const svgElement = screen.getByTestId('svg');
      expect(svgElement).toHaveStyle('fill: red');
    });

    test('DEVE aplicar largura e altura corretamente no SVG passado como número', () => {
      render(<Image src="icon.svg" largura={64} altura={64} />);
      const imgElement = screen.getByTestId('container-image');
      expect(imgElement).toHaveStyle('width: 64px');
      expect(imgElement).toHaveStyle('height: 64px');
    });

    test('DEVE aplicar largura e altura corretamente no SVG passado como variável', () => {
      render(<Image src="icon.svg" largura={sizes.px55} altura={sizes.px55} />);
      const imgElement = screen.getByTestId('container-image');
      expect(imgElement).toHaveStyle('width: 3.438rem');
      expect(imgElement).toHaveStyle('height: 3.438rem');
    });

    test('DEVE aplicar spinner corretamente no SVG', () => {
      render(<Image src="icon.svg" spinner={true} velocidadeSpinner={2} />);
      const svgElement = screen.getByTestId('svg');
      const styles = window.getComputedStyle(svgElement);
      expect(styles.animation).toContain('infinite 2s linear');
    });

    test('DEVE aplicar inclinação corretamente no SVG', () => {
      render(<Image src="icon.svg" inclinacao={45} />);
      const svgElement = screen.getByTestId('svg');
      expect(svgElement).toHaveStyle('transform: rotate(45deg)');
    });

    test('DEVE aplicar cursor correto no SVG', () => {
      render(<Image src="icon.svg" cursor="pointer" />);
      const svgElement = screen.getByTestId('svg');
      expect(svgElement).toHaveStyle('cursor: pointer');
    });

    test('NÃO DEVE aplicar animação quando spinner é falso no SVG', () => {
      render(<Image src="icon.svg" spinner={false} />);
      const svgElement = screen.getByTestId('svg');
      const styles = window.getComputedStyle(svgElement);
      expect(styles.animation).toBe('');
    });
  });

  describe('Image', () => {
    test('DEVE renderizar uma imagem corretamente', () => {
      render(<Image src="icon.png" alt="icone" />);
      const imgElement = screen.getByTestId('img');
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', 'icon.png');
      expect(imgElement).toHaveAttribute('alt', 'icone');
    });

    test('DEVE renderizar um imagem corretamente com o testid passado', () => {
      render(<Image src="icon.png" alt="icone" testId="imagem" />);
      const imgElement = screen.getByTestId('imagem-img');
      expect(imgElement).toBeInTheDocument();
    });

    test('DEVE aplicar largura e altura corretamente na imagem passado como número', () => {
      render(<Image src="icon.png" largura={64} altura={64} />);
      const imgElement = screen.getByTestId('container-image');
      expect(imgElement).toHaveStyle('width: 64px');
      expect(imgElement).toHaveStyle('height: 64px');
    });

    test('DEVE aplicar largura e altura corretamente na imagem passado como variável', () => {
      render(<Image src="icon.png" largura={sizes.px55} altura={sizes.px55} />);
      const imgElement = screen.getByTestId('container-image');
      expect(imgElement).toHaveStyle('width: 3.438rem');
      expect(imgElement).toHaveStyle('height: 3.438rem');
    });

    test('DEVE aplicar spinner corretamente na imagem', () => {
      render(<Image src="icon.png" spinner={true} velocidadeSpinner={2} />);
      const imgElement = screen.getByTestId('img');
      const styles = window.getComputedStyle(imgElement);
      expect(styles.animation).toContain('infinite 2s linear');
    });

    test('DEVE aplicar inclinação corretamente na imagem', () => {
      render(<Image src="icon.png" inclinacao={45} />);
      const imgElement = screen.getByTestId('img');
      expect(imgElement).toHaveStyle('transform: rotate(45deg)');
    });

    test('DEVE aplicar cursor correto na imagem', () => {
      render(<Image src="icon.png" cursor="pointer" />);
      const imgElement = screen.getByTestId('img');
      expect(imgElement).toHaveStyle('cursor: pointer');
    });

    test('NÃO DEVE aplicar animação quando spinner é falso na imagem', () => {
      render(<Image src="icon.png" spinner={false} />);
      const imgElement = screen.getByTestId('img');
      const styles = window.getComputedStyle(imgElement);
      expect(styles.animation).toBe('');
    });
  });
});
