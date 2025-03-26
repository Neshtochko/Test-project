import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import{MainPage} from '../Pages/mainPage';


test('Go to Empty Basket', async ({page})=>{

    // Login
        const login =new LoginPage(page);
        await login.gotoLoginPage();
        await login.login('TEST','TEST');
        
        
        //Authorization check
        const auth=new MainPage(page);
        await expect(auth.userAuthorization.toHaveText('TEST'));
    
       /* //Empty Basket check
    
        const home=new HomePage(page);
        await home.addProductToCart('Iphone 6 32gb');
        await page.waitForTimeout(3000);
        await home.gotoCart();
    //Cart
    
        const cart=new CartPage(page);
        await page.waitForTimeout(3000);
        const status=await cart.checkProductInCart('Iphone 6 32gb');
        expect(await status).toBe(true);*/
    });