import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import * as S from '../Text';

describe('Text', () => {
  describe('Renderização', () => {
    test('DEVE renderizar o texto "Texto de teste"', () => {
      const {getByText} = render(<S.Text>Texto de teste</S.Text>);
      const result = getByText('Texto de teste');
      expect(result).toBeDefined();
    });

    test('DEVE renderizar com o tipo de elemento "h1" quando a propriedade type for "h1"', () => {
      const {container} = render(<S.Text type="h1">Título</S.Text>);
      const result = container.querySelector('h1');
      expect(result).toBeInTheDocument();
    });

    test('DEVE renderizar com o tipo de elemento "p" como padrão quando a propriedade type não for informada', () => {
      const {container} = render(<S.Text>Parágrafo padrão</S.Text>);
      const result = container.querySelector('p');
      expect(result).toBeInTheDocument();
    });

    test('DEVE aplicar "text-transform: uppercase" QUANDO a propriedade toUpper for igual a "true"', () => {
      const {container} = render(
        <S.Text toUpper={true}>Texto em maiúsculas</S.Text>,
      );
      const result = container.firstChild;
      expect(result).toHaveStyle('text-transform: uppercase');
    });

    test('NÃO DEVE renderizar o texto em maiúsculas QUANDO a propriedade toUpper não for passada', () => {
      const {getByText} = render(<S.Text>Texto normal</S.Text>);
      const result = getByText('Texto normal');
      expect(result).toBeInTheDocument();
    });
  });

  describe('Propriedades de Estilo', () => {
    test('DEVE aplicar o tamanho da fonte corretamente QUANDO a propriedade tamanho for "16"', () => {
      const {container} = render(
        <S.Text tamanho={16}>Texto com tamanho 16</S.Text>,
      );
      expect(container.firstChild).toHaveStyle('font-size: 16px');
    });

    test('DEVE aplicar a altura de linha corretamente QUANDO a propriedade alturaDeLinha for "24"', () => {
      const {container} = render(
        <S.Text alturaDeLinha={24}>Texto com altura de linha 24</S.Text>,
      );
      expect(container.firstChild).toHaveStyle('line-height: 24px');
    });

    test('DEVE aplicar a margem superior corretamente QUANDO a propriedade marginTop for "20"', () => {
      const {container} = render(
        <S.Text marginTop={20}>Texto com margem</S.Text>,
      );
      expect(container.firstChild).toHaveStyle('margin-top: 20px');
    });

    test('DEVE aplicar o cursor corretamente QUANDO a propriedade cursor for "pointer"', () => {
      const {container} = render(
        <S.Text cursor="pointer">Texto com cursor pointer</S.Text>,
      );
      expect(container.firstChild).toHaveStyle('cursor: pointer');
    });

    test('DEVE aplicar a cor corretamente QUANDO a propriedade color for passada', () => {
      const {container} = render(
        <S.Text color="#ff0000">Texto colorido</S.Text>,
      );
      expect(container.firstChild).toHaveStyle('color: #ff0000');
    });
  });

  describe('Comportamento de Children', () => {
    test('DEVE renderizar elementos React passados como children', () => {
      const {getByText} = render(
        <S.Text>
          <strong>Texto com elemento filho</strong>
        </S.Text>,
      );
      const result = getByText('Texto com elemento filho');
      expect(result).toBeInTheDocument();
    });

    test('DEVE renderizar corretamente múltiplos elementos React passados como children', () => {
      const {getByText} = render(
        <S.Text>
          <span>Texto 1</span>
          <span>Texto 2</span>
        </S.Text>,
      );
      expect(getByText('Texto 1')).toBeInTheDocument();
      expect(getByText('Texto 2')).toBeInTheDocument();
    });
  });
});
