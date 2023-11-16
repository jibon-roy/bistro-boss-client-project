
import PageHelmate from "../../utilities/PageHelmate";
import About from "./about/about";
import Banner from "./banner/Banner";
import Slider from "./slider/Slider";

const Home = () => {



    return (
        <>
            <PageHelmate>Home</PageHelmate>
            <section>
                <Banner></Banner>
            </section>
            <div className="max-w-5xl xl:max-w-[1320px] mx-auto">
                <section>
                    <Slider></Slider>
                </section>
                <section>
                    <About></About>
                </section>
            </div>

        </>
    );
};

export default Home;