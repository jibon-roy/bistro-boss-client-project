import { Helmet } from "react-helmet-async";


const PageHelmate = ({ children }) => {
    return <Helmet><title>Bistro Boss | {children}</title></Helmet>
};

export default PageHelmate;