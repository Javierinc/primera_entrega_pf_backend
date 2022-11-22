import fs from "fs"

export class ShoppingCartContainer {
    constructor(path){
        this.cart = {}
        this.path = path
    }
    async createShoppingCart(id){
        try{
            this.cart.id = id;
            this.cart.products = [];
            await fs.promises.writeFile(this.path,JSON.stringify(this.cart) );
            return this.cart.id;
        }catch (error){
            throw error;
        }
    }
    async deleteCart(id){
        try{
            this.cart = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'));
            if(this.cart.id === id){
                this.cart.products = [];
                await fs.promises.writeFile(this.path,JSON.stringify(this.cart));
                return true
            }else {
                return null
            }
        } catch (error){
            throw error
        }
    }
    async postProduct(id, products){
        try{
            this.cart = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'));
            if(this.cart.id === id){
                this.cart.products.push(products);
                await fs.promises.writeFile(this.path,JSON.stringify(this.cart));
                return products;
            }else{
                return null;
            }

        }catch (error){
            throw error
        }
    }
    async getProducts(id){
        try{
            this.cart = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'));
            if(this.cart.id === id){
                return this.cart.products.map(e => e, [])
            }else{
                return null
            } 
        }catch (error){
            throw error
        }
    }
    async deleteProduct(id, productId){    
        try{
            this.cart = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'));
            if(this.cart.id !== id) return null;
            const index = this.cart.products.findIndex((e) => e.id === productId);
            if(index === -1) return null;
            this.cart.products.splice(index, 1)
            await fs.promises.writeFile(this.path,JSON.stringify(this.cart));
            return true;
        }catch (error){
            throw error
        }
    }
}