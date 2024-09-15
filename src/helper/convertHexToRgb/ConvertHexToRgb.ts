export function convertHexToRgb(hex: string): string | undefined {
  hex = hex.replace(/^#/, '');

  if (hex.length !== 6 && hex.length !== 3) {
    return undefined;
  }

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(char => char + char)
      .join('');
  }

  const [r, g, b] = [0, 2, 4].map(offset =>
    parseInt(hex.substring(offset, offset + 2), 16),
  );

  if ([r, g, b].some(value => isNaN(value))) {
    return undefined;
  }

  return `rgb(${r}, ${g}, ${b})`;
}
