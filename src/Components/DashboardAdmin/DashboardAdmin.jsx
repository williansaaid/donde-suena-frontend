import { useSelector } from "react-redux";
import { ArtistAdmin } from "./ArtistAdmin";
import { EventAdmin } from "./EventAdmin";
import { UsersAdmin } from "./UsersAdmin";
import { PlacesAdmin } from "./PlacesAdmin";
import { Select } from "./Select";
const DashboardAdmin = () => {
    const user = useSelector((state) => state.sessionState?.user);

    const isAdmin = user.admin || false;
    return (
        <div>
            <Select />
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Dashboard
                </h1>
            </div>
            <EventAdmin />
            <PlacesAdmin />
            <UsersAdmin />
            <ArtistAdmin />
        </div>
    );
};

export default DashboardAdmin;
