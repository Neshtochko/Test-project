export class LoginPage{

    constructor(page) {

        this.page =page;
        this.loginLink="//a[@id='login2']";
        this.usernameInput ="#loginusername";
        this.passwordInput ="#loginpassword";
        this.loginButton="button[onclick='logIn()']";   
        this.logoutLink="#logout2"; 
    }

    async gotoLoginPage(){
     await this.page.goto("https://demoblaze.com/index.html");
    }

    async login(username,password){

        await this.page.locator(this.loginLink).click();
        await this.page.waitForSelector('#logInModal', { state: 'visible' }); 

        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);

        await this.page.locator(this.loginButton).waitFor({ state: 'visible' }); 
        
        await this.page.locator(this.loginButton).click();
            
            //verify log out
        
        await this.page.locator (this.logoutLink).waitFor({state:"visible"});
    }
        
}