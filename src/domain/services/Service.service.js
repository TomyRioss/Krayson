import { Service } from "../models/Service";
import { ServiceList } from "../models/ServiceList";

export class Service_service{

    constructor(){
        this.programmingServices = new ServiceList();
        this.minecraftServices = new ServiceList();
        this.discordServices = new ServiceList();
        
        this.storeProgrammingServices();
        this.storeDiscordServices();
        this.storeMinecraftServices();
    }

    storeProgrammingServices(){
        this.programmingServices.list.push(new Service("YTS5Q3KPK5YK4",10.99,"Aplicación Sencilla","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",1))
        this.programmingServices.list.push(new Service("C4G47ARVAMT2W",5.99,"Aplicación Avanzada","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",1))
        this.programmingServices.list.push(new Service("C4G47ARVAMT2W",5.99,"Bot Sencillo","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",1))
        this.programmingServices.list.push(new Service("C4G47ARVAMT2W",5.99,"Bot Avanzado","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",1))
    }

    storeMinecraftServices(){
        this.minecraftServices.list.push(new Service("AYIBDA",7,"Servidor Simple [Bedrock]","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",2))
        this.minecraftServices.list.push(new Service("AYIBDA",7,"Servidor Simple [Java]","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",2))
        this.minecraftServices.list.push(new Service("AYIBDA",13,"Servidor Avanzado [Bedrock]","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",2))
        this.minecraftServices.list.push(new Service("AYIBDA",13,"Servidor Avanzado [Java]","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",2))
        this.minecraftServices.list.push(new Service("AYIBDA",25,"Servidor Crossplay [Java y Bedrock]","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",2))
        this.minecraftServices.list.push(new Service("AYIBDA",5,"Texturas Simples [Bedrock]","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",2))
        this.minecraftServices.list.push(new Service("AYIBDA","","Servidor Avanzadas [Bedrock]","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",2))
    }

    storeDiscordServices(){
        this.discordServices.list.push(new Service("UDQIE",2,"Servidor Sencillo","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",3))
        this.discordServices.list.push(new Service("UDQIE","8 - 10$","Servidor Avanzado","https://www.juancmejia.com/wp-content/uploads/2018/03/Mejores-productos-para-vender-online.jpg",3))
    }

}

