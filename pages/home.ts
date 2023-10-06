const { I } = inject();
export = {

  welcomeMessage: "//android.widget.TextView[@text='¡Felicidades!']",

  validateWelcomeMessage() {
    I.waitForVisible(this.welcomeMessage,20);
  }

}
