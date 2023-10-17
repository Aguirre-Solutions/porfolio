import { Fragment } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { AppBar, Box, Typography, Toolbar } from "@mui/material";
import {StyledToolbar} from "../../utils/styledComponents";
import { useTheme } from "@mui/material/styles";

const Navigation = () => {
    const theme = useTheme();
    return (
        <Fragment>
            <AppBar position="fixed" style={{ height: '48px' }}>
                <StyledToolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" noWrap component="div">
                            <Link to="/" style={{ textDecoration: 'none', color: theme.palette.primary.contrastText, }}>Home</Link>
                        </Typography>
                    </Box>
                </StyledToolbar>
            </AppBar>
            <Toolbar />
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
