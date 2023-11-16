

const MainHeader = ({ sub, main }) => {
    return (
        <div className="block mx-auto max-w-sm text-center mt-16 mb-10">
            <div className="text-[#D99904] text-xl my-2 italic">---{sub}---</div>
            <div className="w-full h-[4px] bg-[#E8E8E8]"></div>
            <h1 className="text-5xl uppercase my-3">{main}</h1>
            <div className="w-full h-[4px] bg-[#E8E8E8]"></div>
        </div>
    );
};

export default MainHeader;