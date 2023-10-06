const { I } = inject();
export = {

  fields: {
      email: '~txtEmail',
      password: '~txtPassword'
  },
  errorMessage: '~labelSubtitle',
  singInBtn: '~btnLogin',

  login(email, password){
    I.waitForElement(this.fields.email);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.tap(this.singInBtn);
  },

  isDisplayed(){
    I.waitForElement(this.fields.email,20);
    I.waitForElement(this.fields.password,20);
  },
  
  validateErrorMessage(message){
    I.waitForElement(this.errorMessage,20);
    I.see(message,this.errorMessage);
  }
}
