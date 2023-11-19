import MenuTabs from "./menuTabs/MenuTabs";
import OurShopHeader from "./ourShopHeader/OurShopHeader";


const OurShop = () => {
    return (
        <div>
            <section>
                <OurShopHeader></OurShopHeader>
            </section>
            <section>
                <MenuTabs></MenuTabs>
            </section>
        </div>
    );
};

export default OurShop;