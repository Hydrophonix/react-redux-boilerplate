// Core
import { FC, useEffect }    from "react";
import { Table, TableBody } from "@mui/material";

import { useNavigate } from "react-router-dom";
// Components
import { BackdropContainer } from "../../../components";
import { UserTableHead }     from "./user-table-head";
import { UserTableRow }      from "./user-table-row";
import { UserTableFooter }   from "./user-table-footer";

// State
import { useAppDispatch, useAppSelector, users } from "../../../state";

// Instruments
import { User } from "../../../state/domains/users/users.types";

export const UserTable: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        list,
        isLoading,
        skip,
    } = useAppSelector((state) => state.users);


    useEffect(() => {
        dispatch(users.find());
    }, [ dispatch ]);


    const handleUserDelete = (userId: string) => {
        dispatch(users.delete(userId));
    };

    const handleRedirectToUserEditPage = (user: User) => {
        navigate(`/users/${user.id}`, {
            state: user,
        });
    };


    return (
        <BackdropContainer open = { isLoading }>
            <Table sx = {{  width: 800 }}>
                <UserTableHead />

                <TableBody>
                    {list.map((user, i) => (
                        <UserTableRow
                            handleUserDelete = { handleUserDelete }
                            handleUserEdit = { handleRedirectToUserEditPage }
                            key = { user.id }
                            number = { skip + i + 1 }
                            user = { user }
                        />
                    ))}
                </TableBody>

                <UserTableFooter />
            </Table>
        </BackdropContainer>
    );
};
