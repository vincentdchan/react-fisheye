import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';

export default [{
  input: 'src/fish-eye.js',
  output: {
    file: 'lib/bundle.js',
    format: 'esm'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    })
  ]
}];
