import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';

const name = packageJson.name;
const env = process.env.NODE_ENV;
const banner = `/* ${name} myron.liu version ${packageJson.version} */`;
const plugins = [
  postcss({ extensions: ['.less'], extract: `dist/${name}.css` }),
  resolve({ jsnext: true, main: true, browser: true }),
  commonjs(),
  babel({
    babelrc: false,
    include: 'ui/**',
    runtimeHelpers: true,
    presets: [
      [
        'env',
        {
          modules: false
        }
      ],
      'stage-2',
      'es2015-rollup'
    ]
  })
];

let output = [{
  banner,
  file: `dist/${name}.common.js`,
  format: 'cjs'
}, {
  banner,
  file: `dist/${name}.esm.js`,
  format: 'es'
}];

if (env === 'production') {
  plugins.push(uglify());
  output = {
    banner,
    file: `dist/${name}.js`,
    format: 'umd',
    name: 'MuseUI',
    globals: {
      vue: 'Vue'
    }
  };
}

export default {
  input: 'ui/index.js',
  output,
  plugins: plugins,
  external: ['vue']
};
