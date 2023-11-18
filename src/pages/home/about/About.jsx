import bgImg from '../../../assets/home/chef-service.jpg'

const About = () => {
    return (
        <div className='mt-20 mb-20 p-2 min-h-[572px] flex justify-center items-center' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='max-w-6xl bg-white text-center p-5 md:p-10 lg:py-20 lg:px-20 z-10'>
                <h1 className='text-5xl uppercase mb-5'>Bistro Boss</h1>
                Bistro Boss stands as a culinary sanctuary, offering an unparalleled gastronomic journey.
                Our founder, the heartbeat of our establishment, crafts each dish as
                a masterpiece, blending global influences with locally-sourced
                ingredients. The menu boasts an exquisite array, from captivating
                appetizers to indulgent desserts. Beyond exceptional cuisine, Bistro
                Boss embraces a warm ambiance, making it the perfect setting for
                intimate dinners and lively gatherings. A beloved destination for
                food enthusiasts, our bistro isn&#39;t just a place to dine;
                it&#39;s a celebration of passion, flavor, and the art of fine
                dining.</div>
        </div>
    );
};

export default About;