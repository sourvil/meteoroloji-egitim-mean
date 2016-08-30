exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

//   suites: {
//     homepage: 'tests/e2e/homepage/**/*Spec.js',
//     search: ['tests/e2e/contact_search/**/*Spec.js',
//       'tests/e2e/venue_search/**/*Spec.js']
//   },


  specs: ['protractor-spec.js'],
//   capabilities: {
//     browserName: 'firefox',
//   }
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};