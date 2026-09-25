export const ACCENT_COLORS = ["#657ED4", "#f85e5e", "#00db49", "#e4f21d"];
export const ACCENT_CLASS_NAMES = ["accent-blue", "accent-red", "accent-green", "accent-yellow"];

export function getAccentClassName(hexColor) {
  const index = ACCENT_COLORS.indexOf(hexColor);
  return ACCENT_CLASS_NAMES[index === -1 ? 0 : index];
}
