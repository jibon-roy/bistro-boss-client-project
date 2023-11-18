import featured from '../../../assets/home/featured.jpg'
import MainHeader from '../../../components/mainHeader/MainHeader';

const FormOurMenu = () => {
    return (
        <div className='relative'>
            <div className='min-h-[848px] flex justify-center items-center brightness-50 bg-black' style={{ background: `url(${featured})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

            </div>
            <div className='text-white absolute top-0 left-1/2 transform -translate-x-1/2'>
                <MainHeader sub={"Check it out"} main={"FROM OUR MENU"}></MainHeader>
            </div>
            <div className='absolute top-1/2 -translate-y-1/3 text-white left-1/2 transform -translate-x-1/2 flex justify-around w-full'>
                <div>
                    <img src={featured} className='w-[90%]' alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <h2 className='text-3xl font-semibold'>March 20, 2023</h2>
                        <h3 className='text-xl font-medium'>WHERE CAN I GET SOME?</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormOurMenu;