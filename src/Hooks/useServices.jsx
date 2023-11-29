import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
   const [services, setServices] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect( () => {
      const fetchData = async () => {
         try {
            const res = await axios.get('http://localhost:5000/services');
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