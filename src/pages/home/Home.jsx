
import Navbar from "./navbar/Navbar";
import PageHelmate from "../../utilities/PageHelmate";
import Banner from "./banner/Banner";

const Home = () => {



    return (
        <>
            <PageHelmate>Home</PageHelmate>
            <Navbar></Navbar>
            <section>
                <Banner></Banner>
            </section>
        </>
    );
};

export default Home;