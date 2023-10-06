const { I , assert , loginPage, homePage} = inject();

Given('el usuario esta en la pagina de inicio de sesion', () => {
   loginPage.isDisplayed();
});

When('el usuario realiza el inicio de sesion con usuario "{word}" y password "{word}"', (user, password) => {
  loginPage.login(user, password);
});

When('Ingreso a la aplicacion', () => {
  //El ingreso lo realiza el fwk
});

Then('se visualiza el siguiente mensaje de error {string}', (message) => {
  loginPage.validateErrorMessage(message);
});

Then('accede a la home de la aplicacion', () => {
  homePage.validateWelcomeMessage();
});