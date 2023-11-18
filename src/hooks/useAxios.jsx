import axios from "axios";


export const axiosSeceure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxios = () => {
    return axiosSeceure;
};

export default useAxios;