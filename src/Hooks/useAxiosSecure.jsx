import axios from "axios";

const axiosSecure = axios.create({
   baseURL: 'https://web-sculpt-server.vercel.app'
})

const useAxiosSecure = () => {
   return axiosSecure;
};

export default useAxiosSecure;