import SeconderyButton from "../seconderyButton/seconderyButton";


const Card = ({ card }) => {
    return (
        <div className="rounded-none card card-compact bg-base-100 shadow-xl">
            <figure><img src={card?.image} className="w-full" alt="Shoes" /></figure>
            <div className="card-body justify-center text-center">
                <h2 className="card-title justify-center text-center">{card?.name}</h2>
                <p>{card?.recipe}</p>
                <div className="card-actions justify-center">
                    <SeconderyButton>Add to cart</SeconderyButton>
                </div>
            </div>
        </div>
    );
};

export default Card;