import shop from '../../../assets/shop/banner2.jpg'


const OurShopHeader = () => {
    return (
        <div className='relative'>
            <div className='min-h-[800px] flex justify-center items-center bg-black' style={{ background: `url(${shop})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='flex justify-center bg-[#151515] bg-opacity-60 md:mx-40 w-full'>

                    <div className='text-center text-white my-20'>
                        <h2 className='text-6xl font-semibold'>OUR Shop</h2>
                        <h3 className='text-xl font-normal uppercase my-10'>Would you like to try a dish?</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurShopHeader;