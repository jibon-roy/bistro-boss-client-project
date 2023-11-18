import { useState } from "react";
import CommonItemLoader from "../../../components/commonItemLoader/CommonItemLoader";
import useAxios from "../../../hooks/useAxios";


const Desserts = () => {

    const [items, setItems] = useState();
    // const sliceData = items?.slice(0, 6);

    const postText = "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    const axiosSeceure = useAxios();

    axiosSeceure.get('/homeMenus')
        .then(result => setItems(result?.data))
        .catch(err => console.log(err));


    return (
        <div>
            <CommonItemLoader postText={postText} items={items} heading={'Desserts '}></CommonItemLoader>
        </div>
    );
};

export default Desserts;