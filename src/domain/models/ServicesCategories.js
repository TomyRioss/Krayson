export class ServicesCategories {

    constructor(){
        this.categories = new Array();
        this.store({
            "val": "1",
            "text": "Programación de Apps."
        })
        this.store({
            "val": "2",
            "text": "Servidores de Discord."
        })
        this.store({
            "val": "3",
            "text": "Discord Bots"
        })
    }

    store(category){
        this.categories.push(category)
    }

}