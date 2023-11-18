

const SeconderyButton = ({ children }) => {
    return (
        <div>
            <button className="btn uppercase hover:bg-black text-[#BB8506] hover:border-b-black border-b-[#BB8506] border-b-2">{children}</button>
        </div>
    );
};

export default SeconderyButton;