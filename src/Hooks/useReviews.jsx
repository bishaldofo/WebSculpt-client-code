import axios from "axios";
import { useEffect, useState } from "react";

const useReviews = () => {
   const [reviews, setReviews] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect( () => {
      const fetchData = async () => {
         try {
            const res = await axios.get('http://localhost:5000/reviews');
            setReviews(res.data)
            setLoading(false)
         } catch (error) {
            console.error("Error fetching menu:", error)
         }
      }
      fetchData();
   }, [])

   return [reviews, loading]
}

export default useReviews;