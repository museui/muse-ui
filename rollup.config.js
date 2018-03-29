import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';
export default {
  entry: 'src/index.js',
  output: {
    banner: '/* muse-ui myron.liu version ' + packageJson.version + ' */',
    file: 'dist/muse-ui.js',
    format: 'umd',
    name: 'MuseUI'
  },
  plugins: [
    postcss({ extensions: ['.less'], extract: 'dist/muse-ui.css' }),
    resolve({ jsnext: true, main: true, browser: true }),
    commonjs(),
    babel({ 
      babelrc: false,
      include: 'src/**',
      runtimeHelpers: true,
      presets: [
        [
          'env',
          {
            'modules': false
          }
        ],
        'stage-2'
      ],
      plugins: ['transform-runtime', 'transform-vue-jsx']
    }),
    uglify()
  ],
  external: ['vue']
};
