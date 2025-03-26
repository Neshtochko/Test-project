export class MainPage{


    constructor(page){
        this.page =page;
        this.user ='.text-uppercase';
        this.itemsInBasket= '.basket-count-items.badge.badge-primary';
        this.basketBtn ='#dropdownBasket';
        this.productInBasket = '.basket-item-title';
        this.productList= '.note-item.card.h-100'
        this.addToBasketBtn='.actionBuyProduct.btn.btn-primary.mt-3'
        this.deleteBtn="a[class='btn btn-danger btn-sm mr-auto']"
    }
    //user is authorized
    async userAuthorization(){
        await this.page.locator(this.user).textContent();
       }
   
    //basket is empty
    async emptyBasket() {
        const products =await this.page.$$(this.productInBasket)
        return this.itemsInBasket.lengh ===0;

    }
    //clean basket

    async removeAllProducts() {
        const deleteBtn = await this.page.locator(this.deleteBtn);
        if (deleteBtn) {
            await deleteBtn.click();
            await this.page.waitForTimeout(2000); 
        }
    }
}
    
    //add product
    //THIS IS A TEST COMMENT