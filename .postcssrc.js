module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        '> 1%',
        'last 5 versions',
        'ios >= 7',
        'android > 4.4',
        'not ie < 10'
      ]
    }),
    require('cssnano')({
      safe: true
    })
  ]
};
