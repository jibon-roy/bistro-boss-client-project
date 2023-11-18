import MainHeader from "../../../components/mainHeader/MainHeader";
import Cout from '../../../assets/icon/cout.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
    return (
        <div>
            <MainHeader main={'TESTIMONIALS'} sub='What Our Clients Say'></MainHeader>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <div className="flex justify-center my-20">
                        <div className="rating rating-lg text-center" >
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003]" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003] ml-3" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003] ml-3" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003] ml-3" />
                            <input type="radio" name="rating-8" onChange={() => { }} className="mask mask-star-2 bg-[#CD9003] ml-3" checked />
                        </div>
                    </div>
                    <div className="text-center mx-auto justify-center">
                        <img src={Cout} className="mx-auto mb-16" alt="" />
                    </div>
                    <div className="max-w-4xl mx-auto font-semibold text-center">
                        Various version have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like). It is a long
                        established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout.
                    </div>
                    <div className="text-3xl my-10 text-center text-[#CD9003]">JHON DOE</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center my-20">
                        <div className="rating rating-lg text-center" >
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003]" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003] ml-3" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003] ml-3" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003] ml-3" />
                            <input type="radio" name="rating-8" onChange={() => { }} className="mask mask-star-2 bg-[#CD9003] ml-3" checked />
                        </div>
                    </div>
                    <div className="text-center mx-auto justify-center">
                        <img src={Cout} className="mx-auto mb-16" alt="" />
                    </div>
                    <div className="max-w-4xl mx-auto font-semibold text-center">
                        Various version have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like). It is a long
                        established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout.
                    </div>
                    <div className="text-3xl my-10 text-center text-[#CD9003]">JHON DOE</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center my-20">
                        <div className="rating rating-lg text-center" >
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003]" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003] ml-3" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003] ml-3" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003] ml-3" />
                            <input type="radio" name="rating-8" onChange={() => { }} className="mask mask-star-2 bg-[#CD9003] ml-3" checked />
                        </div>
                    </div>
                    <div className="text-center mx-auto justify-center">
                        <img src={Cout} className="mx-auto mb-16" alt="" />
                    </div>
                    <div className="max-w-4xl mx-auto font-semibold text-center">
                        Various version have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like). It is a long
                        established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout.
                    </div>
                    <div className="text-3xl my-10 text-center text-[#CD9003]">JHON DOE</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center my-20">
                        <div className="rating rating-lg text-center" >
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003]" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003] ml-3" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003] ml-3" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003] ml-3" />
                            <input type="radio" name="rating-8" onChange={() => { }} className="mask mask-star-2 bg-[#CD9003] ml-3" checked />
                        </div>
                    </div>
                    <div className="text-center mx-auto justify-center">
                        <img src={Cout} className="mx-auto mb-16" alt="" />
                    </div>
                    <div className="max-w-4xl mx-auto font-semibold text-center">
                        Various version have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like). It is a long
                        established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout.
                    </div>
                    <div className="text-3xl my-10 text-center text-[#CD9003]">JHON DOE</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;