import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/custom-input.ts',
  output: {
    file: 'dist/custom-input.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve(), // Este plugin asegura que las dependencias de node_modules (como lit) sean empaquetadas
    typescript(),
    terser(),  // Minificación opcional
  ]
};
