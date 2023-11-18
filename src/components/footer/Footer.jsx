

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#1F2937] text-neutral-content">
                <nav className=" text-center w-full p-10">
                    <div className="text-2xl text-center mx-auto">Contact Us</div>
                    <div className="text-lg mx-auto">
                        123 ABS Street, Uni 21, Bangladesh <br></br>
                        +88 123456789<br></br>
                        Mon - Fri: 08:00 - 22:00<br></br>
                        Sat - Sun: 10:00 - 23:00<br></br>
                    </div>
                </nav>
                <aside className="mx-auto p-10 text-center h-full w-full bg-[#111827]">
                    <div className="text-2xl text-center mx-auto">Follow US</div>
                    <p className="mx-auto">ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
            </footer>
            <div className="text-center p-4 bg-black text-white">
                Copyright &copy; CulinaryCloud. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;