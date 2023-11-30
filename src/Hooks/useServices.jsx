import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
   const [services, setServices] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect( () => {
      const fetchData = async () => {
         try {
            const res = await axios.get('https://web-sculpt-server.vercel.app/services');
            setServices(res.data)
            setLoading(false)
         } catch (error) {
            console.error("Error fetching menu:", error)
         }
      }
      fetchData();
   }, [])

   return [services, loading]
}

export default useServices;