import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    name: 'Garnet',
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins: [
    nodeResolve(),
    babel()
  ],
  external: [
    'fs', 'path'
  ],
}
