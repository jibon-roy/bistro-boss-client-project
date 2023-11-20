import { useEffect, useState } from "react";
import Card from "../../../components/card/Card";
import useAxios from "../../../hooks/useAxios";
import MainHeader from "../../../components/mainHeader/MainHeader";


const Recommends = () => {

    const [recommends, setRecommends] = useState();
    const axiosSeceure = useAxios();

    useEffect(() => {
        axiosSeceure.get('/homeMenus')
            .then(result => setRecommends(result?.data))
            .catch(err => console.log(err));

    }, [axiosSeceure])

    return (
        <div className="mb-20">
            <div>
                <MainHeader main={'CHEF RECOMMENDS'} sub={'Should Try'}></MainHeader>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-2 gap-2">
                {
                    recommends?.slice(0, 3).map(card => <Card key={card?._id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Recommends;