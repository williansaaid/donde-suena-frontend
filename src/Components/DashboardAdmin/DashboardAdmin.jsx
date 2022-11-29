import { useSelector } from "react-redux";
import { EventAdmin } from "./EventAdmin";
import { UsersAdmin } from "./UsersAdmin";
const DashboardAdmin = () => {
    const user = useSelector((state) => state.sessionState?.user);

    const isAdmin = user.admin || false;

    return (
        <div>
            <nav>
                <h1>Dashboard</h1>
            </nav>
            <EventAdmin />
            <UsersAdmin />
        </div>
    );
};

export default DashboardAdmin;
