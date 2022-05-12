// Core
import { FC, useLayoutEffect, useState } from "react";
import { Router, BrowserRouterProps }    from "react-router-dom";
import { History }                       from "history";


interface RouterProviderProps extends BrowserRouterProps{
    history: History;
}

export const RouterProvider: FC<RouterProviderProps> = ({ history, ...props }) => {
    const [ state, setState ] = useState({
        action:   history.action,
        location: history.location,
    });

    //@ts-ignore
    useLayoutEffect(() => history.listen(setState), [ history ]);

    return (
        <Router
            { ...props }
            location = { state.location }
            //@ts-ignore
            navigationType = { state.action }
            navigator = { history }
        />
    );
};
