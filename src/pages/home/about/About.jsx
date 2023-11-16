import bgImg from '../../../assets/home/chef-service.jpg'

const About = () => {
    return (
        <div className='mt-20 mb-20 p-2 min-h-[572px] flex justify-center items-center' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='max-w-6xl bg-white text-center p-5 md:p-10 lg:py-20 lg:px-20 z-10'>
                <h1 className='text-5xl uppercase mb-5'>Bistro Boss</h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores corrupti, hic quisquam reprehenderit dolore, repellendus
                assumenda pariatur reiciendis qui voluptatem, illo fuga ab saepe
                sed consequatur labore impedit excepturi? Animi praesentium
                provident corporis. Ipsum ullam quos reiciendis. Cumque aperiam
                amet odit, architecto reiciendis!</div>
        </div>
    );
};

export default About;