import fs from "fs"

export class Container {
    constructor (path){
        this.container = [];
        this.path = path;
    }
    async save(product){
        this.container.push(product);
        await fs.promises.writeFile(this.path, JSON.stringify(this.container));
        return true;
    }
    async getAll(){
        try{
            this.container = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'));
            return this.container.map(e => e, []);
        }catch (error){
            throw error
        }
    }
    async getById(id){
        try{
            this.container = JSON.parse( await fs.promises.readFile(this.path, 'utf-8'));
            let search = this.container.find(e => e.id === id);
            return search === undefined ? null : search;
        }catch (error){
            throw error
        }
    }
    async deleteById(id){
        try{
            this.container = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'));
            let search = this.container.find(e => e.id === id);
            if(search === undefined){
                return null
            }else {
                this.container = this.container.filter(e => e.id != id);
                await fs.promises.writeFile(this.path, JSON.stringify(this.container));
            }
        }catch (error){
            throw error
        }
    }
    async updateProduct(id, update){
        try{
            this.container = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'));
            const index = this.container.findIndex(e => e.id === id);
            if(index === -1){
                return null
            }else {
                const idProduct = this.container[index].id;
                this.container[index] = update;
                this.container[index].id = idProduct;
                await fs.promises.writeFile(this.path, JSON.stringify(this.container));
                return true;
            }
        }catch (error){
            throw error
        }
    }
}