import type { Theme } from '../themes';
import { getThemeByName } from '../themes';

function generateGradientSquareBackground(theme: Theme): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Unable to get 2D context');
    return '';
  }

  const squareSize = 40; // Size of each square
  const width = 800; // Width of the pattern
  const height = 600; // Height of the pattern

  canvas.width = width;
  canvas.height = height;

  // Select background-appropriate colors
  const baseColor = hexToRgb(theme.colors.bgColor);
  const mutedColor = hexToRgb(theme.colors.mutedColor);
  const accentColor = hexToRgb(theme.colors.accentColor);

  // Create gradient colors
  const gradientColors = [
    baseColor,
    interpolateColor(baseColor, mutedColor, 0.3),
    interpolateColor(baseColor, mutedColor, 0.7),
    mutedColor
  ];

  const rows = height / squareSize;
  const cols = width / squareSize;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * squareSize;
      const y = row * squareSize;

      // Calculate color based on position
      const colorIndex = Math.floor((row / rows) * (gradientColors.length - 1));
      const nextColorIndex = Math.min(colorIndex + 1, gradientColors.length - 1);
      
      const color1 = gradientColors[colorIndex];
      const color2 = gradientColors[nextColorIndex];
      
      const ratio = (row / rows) * (gradientColors.length - 1) - colorIndex;
      
      const r = Math.round(color1.r + (color2.r - color1.r) * ratio);
      const g = Math.round(color1.g + (color2.g - color1.g) * ratio);
      const b = Math.round(color1.b + (color2.b - color1.b) * ratio);

      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, squareSize, squareSize);

      // Add a subtle accent variation to some squares
      if (Math.random() < 0.1) { // 10% chance for accent
        ctx.fillStyle = `rgba(${accentColor.r}, ${accentColor.g}, ${accentColor.b}, 0.1)`;
        ctx.fillRect(x, y, squareSize, squareSize);
      }
    }
  }

  return canvas.toDataURL();
}

function hexToRgb(hex: string): { r: number, g: number, b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

function interpolateColor(color1: { r: number, g: number, b: number }, color2: { r: number, g: number, b: number }, factor: number): { r: number, g: number, b: number } {
  return {
    r: Math.round(color1.r + (color2.r - color1.r) * factor),
    g: Math.round(color1.g + (color2.g - color1.g) * factor),
    b: Math.round(color1.b + (color2.b - color1.b) * factor)
  };
}

export function applyPixelatedBackground(theme: Theme): void {
  const backgroundImage = generateGradientSquareBackground(theme);
  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.body.style.backgroundRepeat = 'repeat';
  document.body.style.backgroundSize = 'auto';
}

export function initializeBackground(): void {
  const savedTheme = localStorage.getItem('selectedTheme') || 'retroComputer';
  const initialTheme = getThemeByName(savedTheme);
  applyPixelatedBackground(initialTheme);

  // Listen for theme change events
  document.addEventListener('themeChange', handleThemeChange);
}

function handleThemeChange(e: CustomEvent<{ theme: string }>): void {
  const newTheme = getThemeByName(e.detail.theme);
  applyPixelatedBackground(newTheme);
}

// Export the handler so it can be called from other components if needed
export { handleThemeChange };