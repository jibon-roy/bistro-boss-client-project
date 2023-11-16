import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import slide1 from '../../../assets/home/01.jpg'
import slide2 from '../../../assets/home/02.jpg'
import slide3 from '../../../assets/home/03.png'
import slide4 from '../../../assets/home/04.jpg'
import slide5 from '../../../assets/home/05.png'
import slide6 from '../../../assets/home/06.png'

const CarouselBanner = () => {
    return (
        <Carousel className="mx-auto">
            <div>
                <img src={slide1} className="w-full max-w-[1920px] max-h-[804px] bg-cover" />
            </div>
            <div>
                <img src={slide2} className="w-full max-w-[1920px] max-h-[804px] bg-cover" />
            </div>
            <div>
                <img src={slide3} className="w-full max-w-[1920px] max-h-[804px] bg-cover" />
            </div>
            <div>
                <img src={slide4} className="w-full max-w-[1920px] max-h-[804px] bg-cover" />
            </div>
            <div>
                <img src={slide5} className="w-full max-w-[1920px] max-h-[804px] bg-cover" />
            </div>
            <div>
                <img src={slide6} className="w-full max-w-[1920px] max-h-[804px] bg-cover" />
            </div>
        </Carousel>
    );
};

export default CarouselBanner;