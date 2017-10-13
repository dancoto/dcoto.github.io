const options = {
    files: [
        'build/**/*.html',
        'build/**/*.js',
      ],
    from: [/\/static\/js/g, /\/static\/css/g],
    to: '/',
  };