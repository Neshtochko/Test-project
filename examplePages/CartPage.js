export class CartPage{

    constructor(page){
        this.page =page;
        this.noProducts ="//tbody[@id='tbodyid'='tbodyid']/tr/td[2]";
    }


    async checkProductInCart(productName){
        const productsInCart=await this.page.$$(this.noProducts);
        for(const product of productsInCart){
            console.log(await product.textContent())
            if (productName ===await product.textContent()){
                return true;
                break;
            }
            
        }
    }
}