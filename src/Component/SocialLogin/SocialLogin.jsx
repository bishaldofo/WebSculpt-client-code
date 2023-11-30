import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
   const { googleSignIn } = useContext(AuthContext);
   const axiosSecure = useAxiosSecure();
   const navigate = useNavigate()

   const handleGoogleSignIn = () => {
      googleSignIn()
         .then(result => {
            console.log(result)
            const userInfo = {
               email: result.user?.email,
               name: result.user?.displayName
            }
            axiosSecure.post('/users', userInfo)
               .then(res => {
                  console.log(res.data);
                  navigate('/')
               })
               
      })
   }
   return (
      <div>
         <div>
            <button onClick={handleGoogleSignIn} className="btn w-full bg-white shadow-md" type="submit"><img className="w-4" src="https://i.ibb.co/YWF3FVg/google.png" alt="" />Sign in with Google</button>
         </div>
      </div>
   );
};

export default SocialLogin;