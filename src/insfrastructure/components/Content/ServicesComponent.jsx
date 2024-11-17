import { useEffect, useState } from "react";
import { Service_service } from "../../../domain/services/Service.service";
import PayPalBtn from "../utils/PayPalBtn";

export function ServicesComponent() {
    
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        const data = new Service_service();
        
        const fetchedServices = data.services.list;
        
        setServices(fetchedServices);

    }, []);
    
    return (
        <section className="">
            <ul className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((item, index) => (
                    <li className="items-center flex justify-center flex-col gap-2" key={index}>
                        <div className="relative">
                            <img src={item.image} className="w-80"alt="" />
                            <span className="absolute top-4 right-6 text-white bg-blue-700  p-1 pr-2 pl-2">${item.price}</span>
                        </div>
                        <p>{item.description}</p>
                        <div className="flex gap-4">
                            <PayPalBtn productId={item.id}/>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

    
    

