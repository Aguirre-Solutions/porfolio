import { Fragment } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { AppBar, Box, Typography, Toolbar } from "@mui/material";

const Navigation = () => {
    return (
        <Fragment>
            <AppBar position="fixed" style={{ height: '60px' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" noWrap component="div">
                            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
