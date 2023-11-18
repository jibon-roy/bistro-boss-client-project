import Pizza from "./Pizza/Pizza";
import Desserts from "./desserts/Desserts";
import MenuHeader from "./menuHeader/MenuHeader";
import TodaysOffer from "./todaysOffer/TodaysOffer";


const OurMenu = () => {
    return (
        <>
            <section>
                <MenuHeader></MenuHeader>
            </section>
            <section>
                <TodaysOffer></TodaysOffer>
            </section>
            <section>
                <Desserts></Desserts>
            </section>
            <section>
                <Pizza></Pizza>
            </section>
        </>
    );
};

export default OurMenu;