export class MainPage{


        constructor(page){
            this.page =page;
            this.user ='.text-uppercase';
            this.itemsInBasket= '.basket-count-items.badge.badge-primary';
            this.basketIcon ='#dropdownBasket';
            this.basketDropdown = '.dropdown-menu.dropdown-menu-right.show';
            this.goToBasketBtn = '.btn.btn-primary.btn-sm.ml-auto';
            this.productInBasket = '.basket-item-title';
            this.basketCounter = '.basket-count-items.badge.badge-primary';
            this.productList= '.note-item.card.h-100';
            this.deleteBtn="a[class='btn btn-danger btn-sm mr-auto']";
            this.productName = '.basket-item-title';
            this.productPrice = '.basket-item-price';
            this.totalPrice = '.basket-total-price';
            this.productWithoutDiscount ="//div[@class='note-list row']//div[4]//div[1]//div[2]//button[1]";
        }
    //user is authorized
        async userAuthorization(){
            return this.page.locator(this.user).textContent();
        }
   
    //basket is empty

        
    async clearBasketIfNotEmpty() {
        const basketItemCountText =await this.page.locator(this.basketCounter).textContent();
        const itemCount =parseInt(basketItemCountText,10);

        if(itemCount>0){
            
            await this.page.locator(this.basketIcon).click();
            await this.page.locator(this.deleteBtn).click();
        }    
        
    }   
    //Go to basket

    async goToBasketPage(){
        await this.page.locator(this.basketIcon).click();
        const basketDropdown = await this.page.locator(this.basketDropdown);
        await expect(basketDropdown).toBeVisible();
        await this.page.locator(this.goToBasketBtn).click();
    }

    //Add to basket

    async addToBasketProductWithoutDiscount(){

        await this.page.locator(this.productWithoutDiscount).click();
        
        
    }

    // Basket counter check
    async verifyBasketCount(expectedCount) {
        const basketCount = await this.page.locator(this.itemsInBasket).textContent(); 
        expect(basketCount).toBe(expectedCount); 
    }

    
    // Open basket dropdown
    async openBasketdropdown(){
        await this.page.locator(this.basketIcon).click(); 
      
    }
    //Dropdown content check
    async basketContent(productName,price,totalPrice){
        await this.page.locator(this.productName).textContent(productName);
        await this.page.locator(this.productPrice).textContent(price);
        await this.page.locator(this.totalPrice).textContent(totalPrice);
    }

}