import { DetailList } from "./DetailList";

export class BuyCar{

    constructor(){
        this.id = 1;
        this.list = new DetailList;
    }

    getTotal(){
        let total = 0;
        this.list.details.forEach((item) => total += item.getSubTotal());
        return total;
    }
}