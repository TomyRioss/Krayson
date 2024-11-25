import { Category } from "../models/Category";
import { CategoryList } from "../models/CategoryList";
import { Service_service } from "./Service.service";

export class Categories_services {

    constructor(categoryId){

        const services = new Service_service();

        this.categories = new CategoryList();
        this.loadList = new Array();
        this.store(new Category("1","Programación.",services.programmingServices));
        this.store(new Category("2","Discord.",services.discordServices));
        this.store(new Category("3","Minecraft",services.minecraftServices));
        this.switchData(categoryId)
    }

    switchData(categoryId){
        switch (categoryId) {
            case "1":
                this.loadList = this.categories.list[0].servicesList.list;
                break;
                case "2":
                this.loadList = this.categories.list[1].servicesList.list;
                break;
            case "3":
                this.loadList = this.categories.list[2].servicesList.list;
                break;
            default:
                this.loadList = this.loadList.concat(
                    this.categories.list[0].servicesList.list,
                    this.categories.list[1].servicesList.list,
                    this.categories.list[2].servicesList.list
                );
                break;
        }
    }



    store(category){
        this.categories.list.push(category)
    }

    
}