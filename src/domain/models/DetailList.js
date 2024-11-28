export class DetailList{

    constructor(){
        this.id = 0;
        this.details = new Array();
    }

    store(detail){
        this.details.push(detail);
    }

    destroy(id){
        this.details = this.details.filter((item) => item.id != id)
    }

}