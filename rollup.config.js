import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
    },
    {
      dir: 'dist/umd',
      format: 'umd',
      name: 'DetectDarkMode',
    },
  ],
  plugins: [typescript({ lib: ['es5', 'es6', 'dom'], target: 'es5' })],
};
