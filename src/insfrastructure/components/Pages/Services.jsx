import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Categories_services } from "../../../domain/services/Categories.service";
import { HeaderComponent } from "../Header/HeaderComponent";
import { ServiceCard } from "../utils/ServiceCard";
import { ContactUs } from "../ContactUs/ContactUs";

export function Services() {

  const [services, setServices] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const data = new Categories_services(categoryId);

    let fetchedServices = data.loadList;

    console.log(fetchedServices);

    setServices(fetchedServices);
  }, [categoryId]);

  return (
    <main className="dark">
      <HeaderComponent />
      <section>
        {services.length > 0 ? (
          <ul className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((item, index) => (
              <li
                className="items-center flex justify-center flex-col gap-2"
                key={index}
              >
                <ServiceCard id={item.id} image={item.image} price={item.price} description={item.description}/>
                
              </li>
            ))}
          </ul>
        ) : (
          <div>No encontrado</div>
        )}
      </section>
      <ContactUs/>
    </main>
  );
}
