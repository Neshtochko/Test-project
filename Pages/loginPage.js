export class LoginPage{

    constructor(page){
        this.page =page;
        this.userNameInput ="#loginform-username";
        this.passwordInput= "#loginform-password";
        this.loginBtn ='[name="login-button"]';
    }

    async gotoLoginPage(){
      await this.page.goto("https://enotes.pointschool.ru/login");
     }
 
     async login(username,password){
 
         await this.page.locator(this.usernameInput).fill(username);
         await this.page.locator(this.passwordInput).fill(password);
         await this.page.locator(this.loginButton).click();
     }
         
 }

