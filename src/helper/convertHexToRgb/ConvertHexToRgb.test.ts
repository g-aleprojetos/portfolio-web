import {convertHexToRgb} from './ConvertHexToRgb';

describe('convertHexToRgb', () => {
  test('Deve converter uma cor hexadecimal de 6 dígitos para RGB', () => {
    expect(convertHexToRgb('#ff5733')).toBe('rgb(255, 87, 51)');
    expect(convertHexToRgb('#000000')).toBe('rgb(0, 0, 0)');
    expect(convertHexToRgb('#ffffff')).toBe('rgb(255, 255, 255)');
  });

  test('Deve converter uma cor hexadecimal de 3 dígitos para RGB', () => {
    expect(convertHexToRgb('#f53')).toBe('rgb(255, 85, 51)');
    expect(convertHexToRgb('#fff')).toBe('rgb(255, 255, 255)');
    expect(convertHexToRgb('#000')).toBe('rgb(0, 0, 0)');
  });

  test('Deve lidar com cores hexadecimais sem o caractere #', () => {
    expect(convertHexToRgb('ff5733')).toBe('rgb(255, 87, 51)');
    expect(convertHexToRgb('000000')).toBe('rgb(0, 0, 0)');
    expect(convertHexToRgb('ffffff')).toBe('rgb(255, 255, 255)');
  });

  test('Deve retornar undefined para entradas inválidas', () => {
    expect(convertHexToRgb('#xyz')).toBeUndefined();
    expect(convertHexToRgb('not-a-color')).toBeUndefined();
    expect(convertHexToRgb('#1234')).toBeUndefined();
    expect(convertHexToRgb('#12g')).toBeUndefined();
  });

  test('Deve retornar undefined para entradas com caracteres inválidos', () => {
    expect(convertHexToRgb('#12G')).toBeUndefined();
    expect(convertHexToRgb('12345')).toBeUndefined();
  });
});
