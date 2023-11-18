import { Link } from "react-router-dom";
import Item from "../item/Item";
import PrimaryButton from "../primaryButton/PrimaryButton";
import image from '../../assets/home/chef-service.jpg'

const CommonItemLoader = ({ items, heading, postText }) => {
    return (
        <div>
            <div className='relative'>
                <div className='min-h-[800px] flex justify-center items-center bg-black' style={{ background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center' }}>
                    <div className='flex justify-center bg-[#151515] bg-opacity-60 md:mx-40 w-full'>

                        <div className='text-center text-white my-20'>
                            <h2 className='text-6xl font-semibold'>{heading}</h2>
                            <h3 className='text-xl font-normal my-10 px-3 md:px-20'>{postText}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 mx-2" >
                    {
                        items?.map(item => <Item key={item?._id} item={item}></Item>)
                    }
                </div>
                <div className="text-center"><Link><PrimaryButton>ORDER YOUR FAVOURITE FOOD</PrimaryButton></Link></div>
            </div>
        </div>
    );
};

export default CommonItemLoader;