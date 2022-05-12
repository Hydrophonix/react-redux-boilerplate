// Core
import { FC, PropsWithChildren } from "react";
import { Navigate }              from "react-router-dom";

// Instruments
import { useAppSelector } from "../../state";

interface RequireAdminProps {
    navigateTo: string;
}

export const RequireAdmin: FC<PropsWithChildren<RequireAdminProps>> = ({ navigateTo, children }) => {
    const currentUser = useAppSelector((state) => state.auth.currentUser);

    if (currentUser?.role === "admin") {
        return (
            <>{children}</> // Problem with react types
        );
    }

    return <Navigate to = { navigateTo }/>;
};
