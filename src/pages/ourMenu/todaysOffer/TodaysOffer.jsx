import { useState } from "react";
import MainHeader from "../../../components/mainHeader/MainHeader";
import Item from "../../../components/item/Item";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/primaryButton/PrimaryButton";



const TodaysOffer = () => {
    const [items, setItems] = useState();
    // const sliceData = items?.slice(0, 6);

    const axiosSeceure = useAxios();

    axiosSeceure.get('/homeMenus')
        .then(result => setItems(result?.data))
        .catch(err => console.log(err));


    return (
        <div className="mb-16">
            <MainHeader sub='Check it out' main='FROM OUR MENU'></MainHeader>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 mx-2" >
                {
                    items?.map(item => <Item key={item?._id} item={item}></Item>)
                }
            </div>
            <div className="text-center"><Link><PrimaryButton>ORDER YOUR FAVOURITE FOOD</PrimaryButton></Link></div>
        </div>
    );
};

export default TodaysOffer;