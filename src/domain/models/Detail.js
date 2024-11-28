export class Detail{

    constructor(id,service,quantity){
        this.id = id;
        this.quantity = quantity;
        this.service = service;
        this.subtotal = this.service.price * this.quantity;
    }

}