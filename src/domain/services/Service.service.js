import { Service } from "../models/Service";
import { ServiceList } from "../models/ServiceList";

export class Service_service{

    constructor(){
        this.services = new ServiceList();
        this.store(new Service("YTS5Q3KPK5YK4",10.99,"Aplicación Sencilla","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg"))
        this.store(new Service("C4G47ARVAMT2W",5.99,"Aplicación Avanzada","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg"))
    }
    
    store(service){
        this.services.list.push(service);
    }

}