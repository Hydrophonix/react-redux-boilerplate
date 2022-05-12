// Core
import { Button }      from "@mui/material";
import { FC }          from "react";
import { useNavigate } from "react-router-dom";

// Elements
import { PageContainer, PageHeader } from "../../elements";

// Instruments
import { UserTable } from "./user-table";

export const UsersPage: FC = () => {
    const navigate = useNavigate();

    return (
        <PageContainer>
            <PageHeader>
                Users
            </PageHeader>

            <UserTable />

            <Button
                color = "primary"
                sx = {{ marginTop: 2 }}
                variant = "contained"
                onClick = { () => navigate("/users/create") }>
                CREATE USER
            </Button>
        </PageContainer>
    );
};
