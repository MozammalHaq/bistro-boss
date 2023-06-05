import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AllUsers = () => {
    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await fetch('http://localhost:5000/users')
    //     return res.json();
    // })

    const [axiosSecure] = useAxiosSecure(); 
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is as Admin now.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = user => {
        console.log(user)
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - All Users</title>
            </Helmet>
            <h2 className="text-3xl font-bold">All Users {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin'
                                        ? 'admin'
                                        : <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-ghost btn-sm bg-green-600 text-white">
                                            <FaUserShield />
                                        </button>
                                    }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user)}
                                        className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;