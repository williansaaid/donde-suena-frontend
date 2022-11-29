import { deleteUser, getAllUsers } from "../../Redux/Slices/Users/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const UsersAdmin = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.usersState);

    const tashEvent = (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás revertir esta acción",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, bórralo",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(id));
                window.location.reload();
            }
        });
    };

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);
    return (
        <div className="overflow-hidden text-gray-700 ">
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    {users.map((el) => {
                        return (
                            <div className="flex flex-wrap w-1/3" key={el.id}>
                                <div className="flex flex-wrap w-1/3">
                                    <div
                                        className="flex justify-between items-center"
                                        key={el.id}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div
                                                type="button"
                                                className="cursor-pointer bg-transparent hover:bg-red-400 text-gray-300 White font-semibold hover:text-white py- px-2 border-2 border-red-700 hover:border-transparent rounded-xl transition duration-500"
                                                onClick={() => tashEvent(el.id)}
                                            >
                                                🗑️
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full p-2 md:p-2">
                                        <div className="flex flex-wrap w-full">
                                            <div className="w-full p-2 md:p-2">
                                                <div className="relative sm:h-50 w-80 rounded-lg">
                                                    <img
                                                        className="block object-cover object-center w-full h-full rounded-lg"
                                                        src={el.image}
                                                        alt="imagen no encontrada"
                                                    />
                                                    {el.firstName}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
