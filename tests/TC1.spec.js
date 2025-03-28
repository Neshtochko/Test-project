import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import{MainPage} from '../Pages/mainPage';
import {BasketPage} from '../pages/basketPage';


test('Go to Empty Basket', async ({page})=>{

        // Login
        const login =new LoginPage(page);
        await login.gotoLoginPage();
        await login.login('test','test');
        
        
        //Authorization check
        const main=new MainPage(page);
        const userNameText = await main.userAuthorization();
        await expect(userNameText).toContain('test');
    
       //Empty Basket check
    
        await main.clearBasketIfNotEmpty();
       
        //Cart
    
        await main.goToBasketPage();

        //Check the URL

        const basket = new BasketPage(page);
        await basket.checkBasketURL();
       

    });