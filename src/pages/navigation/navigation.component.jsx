import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Box, Typography, Toolbar } from "@mui/material";
import {StyledToolbar, StyledLink, StyledAppBar} from "../../utils/styledComponents";
import { useTheme } from "@mui/material/styles";

const Navigation = () => {
    const theme = useTheme();
    return (
        <Fragment>
            <StyledAppBar position="fixed" style={{ height: '48px' }}>
                <StyledToolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" noWrap component="div">
                            <StyledLink to="/">Home</StyledLink>
                        </Typography>
                    </Box>
                </StyledToolbar>
            </StyledAppBar>
            <Toolbar />
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
