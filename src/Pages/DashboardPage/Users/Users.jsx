import useUsers from "../../../Hooks/useUsers";

const Users = () => {
   const [users] = useUsers()
   return (
      <div>
         <div className="flex justify-evenly pb-5">
            <h2 className="text-2xl font-semibold">All Employees:</h2> 
            <p className="text-2xl font-semibold">Total Employees: {users.length}</p>
         </div>
         <div className="overflow-x-auto">
            <table className="table table-zebra">
               <thead>
                  <tr>
                     <th></th>
                     <th>Image</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Designation</th>
                     <th>Salary</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     users.map(user =>
                     <tr key={user._id}>
                        <th>1</th>
                        <td>
                           <img className="w-10 h-10 object-cover" src={user?.imageUrl} alt={user.name} />      
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.designation}</td>
                        <td>{user.salary}</td>
                     </tr>)
                  }
               </tbody>
            </table>
            </div>
      </div>
   );
};

export default Users;