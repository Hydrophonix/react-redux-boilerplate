// Core
import { FC, PropsWithChildren } from "react";
import { Navigate }              from "react-router-dom";

// Instruments
import { useAppSelector } from "../../state";

interface RequireAuthProps {
    navigateTo: string;
}

export const RequireAuth: FC<PropsWithChildren<RequireAuthProps>> = ({ navigateTo, children }) => {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

    if (isLoggedIn) {
        return (
            <>{children}</> // Problem with react types
        );
    }

    return <Navigate to = { navigateTo }/>;
};
