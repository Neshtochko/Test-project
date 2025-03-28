import { test, expect } from '@playwright/test';
export class BasketPage{


    constructor(page){
        this.page =page;
        this.basketPageUrl='https://enotes.pointschool.ru/basket';
        
        
    }
    
    async checkBasketURL() {
        await expect(this.page).toHaveURL(this.basketPageUrl); 
}


}