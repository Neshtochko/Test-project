import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import {MainPage} from '../Pages/mainPage';
import {BasketPage} from '../pages/basketPage';


test('Basket with one general product', async ({page})=>{

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
        

        //Add product without discount to basket 

        await main.addToBasketProductWithoutDiscount();
       // await main.verifyBasketCount(1);
        /*await main.openBasketdropdown();
        const basketContent= await main.basketContent();
        await expect(basketContent).toContain('Кошечка Мари',' - 442 р.','442');*/

        
        
     
       

    });