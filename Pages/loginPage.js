export class LoginPage {

    constructor(page) {
        this.page = page;
        this.userNameInput = "#loginform-username";
        this.passwordInput = "#loginform-password";
        this.loginBtn = 'button[name="login-button"]';
        this.loginForm= '#login-form';
        this.rememberMe='#loginform-rememberme'
    }

    async gotoLoginPage() {
        await this.page.goto("https://enotes.pointschool.ru/login");
    }

    async login(username, password) {
        await this.page.locator(this.userNameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.passwordInput).press('Enter');
        
        //await this.page.locator(this.rememberMe).uncheck();
        await this.page.locator(this.loginBtn).click({force:true});
    }
}