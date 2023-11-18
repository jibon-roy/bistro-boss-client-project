
import PageHelmate from "../../utilities/PageHelmate";
import About from "./about/about";
import Banner from "./banner/Banner";
import FormOurMenu from "./fromOurMenu/FormOurMenu";
import HomeMenu from "./homeMenu/HomeMenu";
import Recommends from "./recommends/Recommends";
import Slider from "./slider/Slider";
import Testimonials from "./testimonials/Testimonials";

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
                <section>
                    <HomeMenu></HomeMenu>
                </section>
                <section>
                    <div className="flex my-20 justify-center items-center w-full bg-black text-white h-44 text-4xl">
                        Call Us: +88 0192345678910
                    </div>
                </section>
                <section>
                    <Recommends></Recommends>
                </section>
            </div>
            <section>
                <FormOurMenu></FormOurMenu>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>

        </>
    );
};

export default Home;