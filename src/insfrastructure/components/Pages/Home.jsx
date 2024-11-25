import { HeaderComponent } from "../Header/HeaderComponent";
import { HeroBanner } from "../Hero/HeroBanner";
import "../../../App.css";
import { ContactUs } from "../ContactUs/ContactUs";


export function Home() {
    return <main className="dark bg-image">
        <HeaderComponent/>
        <HeroBanner/>
        <ContactUs/>
    </main>
}