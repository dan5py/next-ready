/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  endOfLine: 'lf',
  printWidth: 100,
  semi: true,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn'],
};
