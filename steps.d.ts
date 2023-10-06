/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.ts');
type loginPage = typeof import('./pages/login.ts');
type homePage = typeof import('./pages/home.ts');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, homePage: homePage, assert: assert }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
