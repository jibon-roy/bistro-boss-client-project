

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn uppercase hover:bg-black hover:text-white hover:border-b-black border-b-black border-b-2">{children}</button>
    );
};

export default PrimaryButton;