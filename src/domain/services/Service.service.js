import { Service } from "../models/Service";
import { ServiceList } from "../models/ServiceList";

export class Service_service{

    constructor(){
        this.services = new ServiceList();
        this.store(new Service(10.99,"Servicio 1","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg"))
        this.store(new Service(5.99,"Servicio 2","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg"))
        this.store(new Service(3.99,"Servicio 3","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg"))
        this.store(new Service(7.99,"Servicio 4","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg"))
        this.store(new Service(20.40,"Servicio 5","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg"))
        this.store(new Service(20.40,"Servicio 6","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg"))
        this.store(new Service(20.40,"Servicio 7","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg"))
        this.store(new Service(20.40,"Servicio 8","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg"))
        this.store(new Service(20.40,"Servicio 9","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg"))
    }
    
    store(service){
        this.services.list.push(service);
    }

}