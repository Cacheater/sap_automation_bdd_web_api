export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      app: __dirname + '/app/scaffolding-0.0.3.apk',
      deviceName: 'Pixel 3 API 30',
       desiredCapabilities: {
         app: './app/scaffolding-0.0.3.apk',
         deviceName: 'Pixel 3 API 30',
         platformVersion: '11.0',
         platformName: 'android',
         automationName: 'UiAutomator2'
       }
     }
  },
  include: {
    I: './steps_file',
    loginPage: './pages/login.ts',
    homePage: './pages/home.ts'
  },
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/login_test.ts']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'mobile-sample'
}