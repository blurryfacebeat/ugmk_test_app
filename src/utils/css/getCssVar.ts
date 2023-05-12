export const getCssVar = (property: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(property);
