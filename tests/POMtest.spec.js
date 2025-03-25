import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage.js';
import{HomePage} from '../pages/HomePage.js';
import{CartPage} from '../pages/CartPage.js';

test('test', async ({page})=>{

    // Login
    const login =new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('Leia','test@123');
    await login.logout();
    await page.waitForTimeout(3000);

    //Home
    const home=new HomePage(page);
    await home.addProductToCart('Iphone 6 32gb');
    await page.waitForTimeout(3000);
    await home.gotoCart();
//Cart

    const cart=new CartPage(page);
    await page.waitForTimeout(3000);
    const status=await cart.checkProductInCart('Iphone 6 32gb');
    expect(await status).toBe(true);
});