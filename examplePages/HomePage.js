export class HomePage{

    constructor(page) {

        this.page =page;
        this.productList="//*[@id='tbodyid']/div/div/div/h4/a"; 
        this.addToCartbtn="//a[normalize-space()='Add to cart']";
        this.cart="#cartur";
    }

    //add product
    async addProductToCart(productName) {
        const productList =await this.page.$$(this.productList);
            for (const product of productList) {
                if (productName=== await product.textContent()){
                    await product.click()
                    break;
                }
            }
            //dialog pop-up
            await this.page.on('dialog', async dialog=>{
                if(dialog.mesage().includes('added')){
                    await dialog.accept();
                }

            })
            await this.page.locator(this.addToCartbtn).click();
    }
    //open Cart
    async gotoCart(){
        await this.page.locator(this.cart).click();
    }
}