

const Item = ({ item }) => {
    return (
        <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="flex justify-end">
                <img src={item?.image} className="max-w-[120px] rounded-b-full rounded-tr-full" alt="" />
            </div>
            <div className="col-span-2">
                <div className="uppercase text-lg">{item?.name} ------</div>
                <div className="text-[#737373]">{item?.recipe}</div>
            </div>
            <div className="text-[#BB8506] text-lg">${item?.price}</div>
        </div>
    );
};

export default Item;